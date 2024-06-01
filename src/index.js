import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import Component
import App from './App';
import Provider from './providers/AuthContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider>
        <App /> {/*/ JSX     foo()   <Foo/> */}
    </Provider>
);

