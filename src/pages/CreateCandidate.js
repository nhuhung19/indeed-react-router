import React, { useState } from 'react'
import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";
import {useHistory } from 'react-router-dom'

export default function CreateCandidate() {
    let history = useHistory()

    let [candidate, setCandidate] = useState({
        city: "",
        email: "",
        company: "",
        country: "",
        job_title: "",
        photo_url: "",
        last_name: "",
        first_name: "",
        gender: ""
    })

    let CreateCandidate = async (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            body: JSON.stringify(candidate),
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await fetch('http://localhost:3000/candidates', config)
        } catch(error){
            console.log("Oops")
        }
        alert('Create candidate successs')
        history.push("/candidates")
    }

    return (
        <div>
            <Container className="mt-5">
                <Form onSubmit={(e) => CreateCandidate(e)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                value={candidate.first_name}
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setCandidate({ ...candidate, first_name: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a first name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={candidate.last_name}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setCandidate({ ...candidate, last_name: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a last name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                value={candidate.gender}
                                type="text"
                                placeholder="Gender"
                                onChange={(e) => setCandidate({ ...candidate, gender: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a gender.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    required
                                    value={candidate.email}
                                    type="email"
                                    placeholder="john@email.com"
                                    value={candidate.email}
                                    onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a email.
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="City"
                                value={candidate.city}
                                onChange={(e) => setCandidate({ ...candidate, city: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="U.S.A."
                                value={candidate.country}
                                onChange={(e) => setCandidate({ ...candidate, country: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a country.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={candidate.photo_url}
                                onChange={(e) => setCandidate({ ...candidate, photo_url: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a photo URL.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="CoderSchool"
                                value={candidate.company}
                                onChange={(e) => setCandidate({ ...candidate, company: e.target.value })} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid company.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridJob">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Developer" 
                                value={candidate.job_title}
                                onChange={(e) => setCandidate({...candidate, job_title: e.target.value})}/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid job title.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
