import React, { useEffect , useState } from 'react'
import { Row, Col, Card, ListGroup, Container, ListGroupItem } from "react-bootstrap";
import { faMap, faEdit, faTrash, faUserMd, faMapPin, faEnvelope, faVenusMars, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function Candidates() {
    const [candidates, setCandidates] = useState([]);
    let user = useSelector(state => state.user)

    useEffect(() => {
        fetchCandidates()
    }, [])

    const fetchCandidates = async () => {
        const url = `http://localhost:3000/candidates`
        const reponse = await fetch(url)
        const data = await reponse.json()
        console.log('data', data)
        setCandidates(data)
    }

    const onDeleteCandidate = id => {
        try {
          const config = { method: "DELETE" };
          fetch(`http://localhost:3000/candidates/${id}`, config);
          const newCandidates = candidates.filter(candidate => candidate.id !== id);
          setCandidates(newCandidates);
        } catch (error) {
          console.log("Error: ", error);
        }
      }

    return (
        
        <div>
            <Container fluid>
                <Row>
                    {candidates.map(candidate => {
                        return (
                            <Col lg="3" key={candidate.id}>
                                <Card>
                                    <Card.Img variant="top" src={candidate.photo_url} />
                                    <Card.Body>
                                        <Card.Title>
                                            {candidate.first_name + " " + candidate.last_name}
                                        </Card.Title>
                                        <Card.Text>{candidate.id}</Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faBriefcase} /> {candidate.company}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faUserMd} /> {candidate.job_title}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faVenusMars} /> {candidate.gender}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faMapPin} /> {candidate.city}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faMap} /> {candidate.country}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <FontAwesomeIcon icon={faEnvelope} /> {candidate.email}
                                        </ListGroupItem>
                                    </ListGroup>
                                    
                                    { user.email === candidate.email || user.email === 'admin@gmail.com' ? 
                                    <Card.Body>
                                        <Link className="mx-2" onClick={() => onDeleteCandidate(candidate.id)}>
                                            <FontAwesomeIcon icon={faTrash} /> Remove
                                        </Link>
                                        <Link className="mx-2" to={`/candidates/${candidate.id}`}>
                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                        </Link>
                                    </Card.Body>
                                       : '' }
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
        
    )
}
