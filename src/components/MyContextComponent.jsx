import {useAuth} from "../providers/AuthContextProvider";

export default function MyContextComponent(){
    const {user, logout} = useAuth();
    return <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.loggedIn.toString()}</p>
        <button onClick={logout} >Logout</button>
    </>
}