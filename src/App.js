import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import HomePage from './pages/HomePage'
import Candidates from './pages/Candidates'
import CandidatePage from './pages/CandidatePage'
import FourOhFourPage from './pages/FourOhFourPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import CreateCandidate from './pages/CreateCandidate'
import { useState } from 'react';
import {useSelector} from 'react-redux'

function App() {
    let user = useSelector(state => state.user)
    // let [isLogin, setIsLogin] = useState(false)
    let ProtectedRoute = (props)=> {
        if(user.authenticate){
            return (
                <Route {...props} />
            )
        } else {
            return (
            <Redirect to="/login" />
            )
        }
    }
    console.log(user)

  return (  
    <div>
        <NavBar />
            <h1 className="text-center">{user.email ? `Well come ${user.email}`: ''}</h1>
        <Switch>
            <ProtectedRoute path="/candidates/:id" render={(props) => <CandidatePage  {...props} />} />
            <ProtectedRoute path="/createcandidate"  render={(props) => <CreateCandidate {...props}/>} />
            <ProtectedRoute path="/candidates" render={(props) => <Candidates {...props}/>} />
            <Route path="/login"  render={(props) => <LoginPage {...props}/>} />
            <Route path="/" render={() => <HomePage />} />
            <Route path="*" render={() => <FourOhFourPage />} />
        </Switch>
    </div>
  );
}

export default App;
