import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import LoginPic from "./LoginPic";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginComp = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Proceed with login logic
    console.log("Logging in with", { email, password });
  };

  return (
    <Container className="login-container">
      <Row className="align-items-center justify-content-center flex-column flex-md-row">
        <Col xs={12} md={6} className="login-pic-container">
          <LoginPic />
        </Col>

        <Col xs={12} md={5}>
          <div className="form-wrapper">
            <h2 className="login-heading">Good to see you again!</h2>
            <Form className="login-form" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="input" type="email" placeholder="username@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="input" type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p className="error-text">{errors.password}</p>}
              </Form.Group>

              <Button className="login-button w-100" variant="primary" type="submit" disabled={!email.trim() || !password.trim()} >
                Log In
              </Button>
              <div className="button-divider"></div>
            </Form>

            <div className="google-login-but">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="google-login-custom">
                    <img src="/google-logo.png" alt="Google Logo" className="google-logo" />
                    Log In with Google
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <h4 className="register-text">
              Not registered yet?
              <Link to="/signup" className="sign-up-link"> Sign up</Link>
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComp;
