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
    let [isLogin, setIsLogin] = useState(false)
    let ProtectedRoute = (props)=> {
        if(props.isAuthenticated){
            return (
                <Route {...props} />
            )
        } else {
            return (
            <Redirect to="/login" />
            )
        }
    }

  return (
    <div>
        <NavBar />


        <Switch>
            <ProtectedRoute path="/candidates/:id" isAuthenticated={isLogin} render={(props) => <CandidatePage  {...props} />} />
            <ProtectedRoute path="/createcandidate" isAuthenticated={isLogin} render={(props) => <CreateCandidate {...props}/>} />
            <Route path="/candidates" render={(props) => <Candidates {...props}/>} />
            <Route path="/login"  render={(props) => <LoginPage setIsLogin={setIsLogin} {...props}/>} />
            <Route path="/" render={() => <HomePage />} />
            <Route path="*" render={() => <FourOhFourPage />} />
        </Switch>
    </div>
  );
}

export default App;
