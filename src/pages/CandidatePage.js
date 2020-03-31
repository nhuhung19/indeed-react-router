import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import CandidateForm from '../components/CandidateForm'

export default function CandidatePage(props) {
    const id = props.match.params.id
   
    return (
        <Container>
            <Row>
                <Col>
                    <CandidateForm id={id} />
                </Col>
            </Row>
        </Container>
    );
}
