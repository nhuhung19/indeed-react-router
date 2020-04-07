import React from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

export default function NavBar() {
    const dispatch = useDispatch()
    let history = useHistory()
    let user = useSelector(state => state.user)
    let onLogout = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/login')
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="mx-2" to="/">Home</Link>
                    <Link className="mx-2" to="/candidates">Candidates</Link>
                    <Link className="mx-2" to="/createcandidate">Create Candidate</Link>
                    <Link className="mx-2" to="/login">Login</Link>
                </Nav>
                <Form inline>
                   {user.email ? <Button onClick={onLogout} variant="outline-primary">Log out</Button> : ''} 
                </Form>
            </Navbar>
        </div>
    )
}
