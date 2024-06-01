import {createContext, useContext, useState} from "react";

// Создание контекста
const AuthContext = createContext(null);

// Создание провайдера контекста
// Оборачивает дочерние элементы и предоставляет им доступ к данным и методам
const AuthContextProvider = (props) => {

    const [globalState, setGlobalState] = useState();
    const [user, setUser] = useState({
        name: 'John Dow',
        email: 'j.dow@gmail.com',
        loggedIn: true
    })

    const login = () => setUser({...user, loggedIn: true})
    const logout = () => setUser({...user, loggedIn: false})

    return <AuthContext.Provider value={{user, login, logout}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContextProvider;

// Пользовательский хук
export const useAuth = () => useContext(AuthContext);