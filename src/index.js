import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


let initialState = {
    user: { email: '', password: '', authenticate: false }
}
function indeedReducer (state = initialState, action) {
    if(action.type === 'LOGIN'){
        state.user = {...action.payload, authenticate: true}
        console.log(state.user)
    } else if(action.type === 'LOGOUT'){
    //  state = initialState
        // state.user.email = '',
        // state.user.password = '',
        // state.user.authenticate = false
        state.user = {email: '', password: '', authenticate: false}
    };
    return  {...state} 
}
const store = createStore(indeedReducer)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
