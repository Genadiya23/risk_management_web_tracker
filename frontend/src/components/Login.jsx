import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginPic from './LoginPic'; 
import './Login.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default class LoginComp extends Component {
  render() {
    return (
<Container className="login-container">
<Row className="align-items-center justify-content-center flex-column flex-md-row">
    {/* Left Side - Image (Small on Mobile, Full on Desktop) */}
    <Col xs={12} md={6} className="login-pic-container">
        <LoginPic />
    </Col>

    {/* Right Side - Form (Takes More Space on Mobile) */}
    <Col xs={12} md={5}>
      <div className="form-wrapper">
        <h2>Good to see you again!</h2>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="input" type="email" placeholder="username@mail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" placeholder="Password" />
          </Form.Group>

          <Button className="login-button w-100" variant="primary" type="submit">
            Log In
          </Button>
          <div className="button-divider"></div>
        </Form>

        <div className="google-login-but">
            <SignedOut>
                <button className="google-login-custom" onClick={() => document.querySelector(".clerk-signin").click()}>
                    <img src="/google-logo.png" alt="Google Logo" className="google-logo" />
                    Log In with Google
                </button>
                <SignInButton className="clerk-signin" style={{ display: "none" }} />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

        <h4 className="register-text">
            Not registered yet? 
            <a href="/sign-up" className="sign-up-link"> Sign up</a>
        </h4>
      </div>
    </Col>
</Row>


</Container>

    );
  }
}