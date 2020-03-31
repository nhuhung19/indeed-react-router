import React from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

export default function NavBar() {
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
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
