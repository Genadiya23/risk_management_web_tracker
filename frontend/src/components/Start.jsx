import React, { Component } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import './Start.css';

const Start = () =>{
    {return(
        <div fixed='top' className="page-wrapper w-full bg-center bg-cover px-8">
            <Container className="content d-flex flex-column justify-content-center align-items-center vh-100">
                {/* Centering the Welcome Text */}
                <Row className="text-center mb-4">
                    <Col>
                        <h1 className='Welcome'>Risk Management</h1>
                        <h3 className='subtitle'>Better Safe Than Sorry</h3>
                    </Col>
                </Row>
                {/* Centering the Buttons */}
                <Row>
                    <Col xs={6}>
                        <Button size='lg'>Create a Project</Button>
                    </Col>
                    <Col xs={6}>
                        <Button size='lg'>Join a Project</Button>
                    </Col>
                </Row>

            </Container>
            {/* Picture */}
            <div className='picture'></div>
        </div>
    )}
}

export default Start;