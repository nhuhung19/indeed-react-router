import React from 'react'
import {useHistory } from 'react-router-dom'

import '../../src/css/login.css'

export default function Login(props) {
    let history = useHistory()
    console.log(props)
    let userLogin = (e) => {
        e.preventDefault()
        props.setIsLogin(true)
        history.push("/")
    }
    return (
        <form onSubmit={(e) => userLogin(e)} className="container mt-5 w-50">
            <h3 className="text-center">Sign Up</h3>

            <div className="form-group w-75 mx-auto">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" required/>
            </div>

            <div className="form-group w-75 mx-auto">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" disabled/>
            </div>

            <button type="submit" className="mx-auto btn btn-primary btn-block w-50">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
}

