import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage'
import Candidates from './pages/Candidates'
import CandidatePage from './pages/CandidatePage'
import FourOhFourPage from './pages/FourOhFourPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import CreateCandidate from './pages/CreateCandidate'
import { useState } from 'react';

function App() {
    let [user, setUser] = useState({isAuthenticated: false})
    let ProtectedRoute = (props)=> {
        if(user.isAuthenticated){
            return (
                <Route {...props} />
            )
        } else {
            return (
            <Redirect to="/login" />
            )
        }
    }
    let logIn = () => {
        // debugger
        setUser({...user, isAuthenticated:true})
    }
  return (
    <div>
        <NavBar />


        <Switch>
            <ProtectedRoute path="/candidates/:id" render={(props) => <CandidatePage {...props} />} />
            <ProtectedRoute path="/createcandidate" render={(props) => <CreateCandidate {...props}/>} />
            <Route path="/candidates" render={(props) => <Candidates {...props}/>} />
            <Route path="/login"  render={(props) => <LoginPage logIn={logIn} {...props}/>} />
            <Route path="/" render={() => <HomePage />} />
            <Route path="*" render={() => <FourOhFourPage />} />
        </Switch>
    </div>
  );
}

export default App;
