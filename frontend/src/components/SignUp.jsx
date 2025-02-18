import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUpPic from './SignUpPic'; 
import './SignUp.css';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default class SignUpComp extends Component {
  render() {
    return (
<Container className="signup-container">
<Row className="align-items-center justify-content-center flex-column flex-md-row">
    {/* Left Side - Image (Small on Mobile, Full on Desktop) */}
    <Col xs={12} md={6} className="signup-pic-container">
        <SignUpPic />
    </Col>

    {/* Right Side - Form (Takes More Space on Mobile) */}
    <Col xs={12} md={5}>
      <div className="form-wrapper">
        <h2>Let's mitigate risks together!</h2>
        <Form className="signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="input" type="email" placeholder="username@mail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" placeholder="Password" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control className="input" type="password" placeholder="Repeat Password" required />
            </Form.Group>

          <Button className="signup-button w-100" variant="primary" type="submit">
            Sign Up
          </Button>
          <div className="button-divider"></div>
        </Form>

        <div className="google-signup-but">
            <SignedOut>
                <button className="google-signup-custom" onClick={() => document.querySelector(".clerk-signin").click()}>
                    <img src="/google-logo.png" alt="Google Logo" className="google-logo" />
                    Sign Up with Google
                </button>
                <SignInButton className="clerk-signin" style={{ display: "none" }} />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

        <h4 className="register-text">
            Already have an account? 
            <Link to="/login" className="login-link"> Log In</Link>
        </h4>

      </div>
    </Col>
</Row>


</Container>

    );
  }
}