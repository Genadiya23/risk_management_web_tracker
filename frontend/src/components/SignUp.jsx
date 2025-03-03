import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUpPic from './SignUpPic'; 
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from 'react';

const SignUpComp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignUp = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!email.trim()) validationErrors.email = "Email is required";
    if (!password.trim()) validationErrors.password = "Password is required";
    if (password !== confirmPassword) validationErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Signed up!");
    navigate("/login");
  };
  
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
        <h2 className='signup-heading'>Let's mitigate risks together!</h2>
        <Form className="signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="input" type="email" placeholder="username@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <p className="error-text">{errors.password}</p>}
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control className="input" type="password" placeholder="Repeat Password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} />
                  {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </Form.Group>
          
          <Button className="signup-button w-100" variant="primary" type="submit" disabled={!email || !password || password !== confirmPassword}>
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
};

export default SignUpComp;