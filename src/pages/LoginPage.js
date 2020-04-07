import React from 'react'
import {useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'

import '../../src/css/login.css'

export default function Login(props) {
    const dispatch = useDispatch()
    let email = ''
    let password = ''
    let history = useHistory()
    console.log(props)
    let userLogin = (e) => {
        e.preventDefault()
        let user = {email: email, password: password}
        dispatch({type: 'LOGIN', payload: user})
        history.push("/candidates")
    }
    return (
        <form onSubmit={(e) => userLogin(e)} className="container mt-5 w-50">
            <h3 className="text-center">Sign Up</h3>

            <div className="form-group w-75 mx-auto">
                <label>Email</label>
                <input onChange={(e) => email=e.target.value} type="email" className="form-control" placeholder="Email" required/>
            </div>

            <div className="form-group w-75 mx-auto">
                <label>Password</label>
                <input onChange={(e) => password=e.target.value} type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <button type="submit" className="mx-auto btn btn-primary btn-block w-50">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
}

