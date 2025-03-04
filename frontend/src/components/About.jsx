import React from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import LoginPic from "./LoginPic";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AboutComp = () => {
  return (
    <div> 
    <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url('/aboutback.jpeg')`, // Ensure correct filename
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',  // Fix centering
          backgroundRepeat: 'no-repeat', 
          width: '100vw', 
          height: '100vh', 
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          color: 'white', 
          position: 'relative' 
        }}
      >
        <div className="hero-overlay"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          background: "rgba(0, 0, 0, 0.5)" 
        }}></div>
        <h1 className="hero-text">Welcome to Risk Tracker</h1>
      </section>

      {/* Description Section */}
      <section className="container description-section">
        <h2>About Risk Tracker</h2>
        <p className="lead">
          Risk Tracker helps you identify, assess, and mitigate risks efficiently. 
          Whether you’re managing project risks or business uncertainties, we’ve got you covered.
        </p>
      </section>

      {/* Team Section */}
      <section className="container team-section">
        <h2>Meet Our Team</h2>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 team-member">
            <img src="/assets/your-photo1.jpg" alt="Team Member 1" className="img-fluid" />
            <h5>Yana Sivakova</h5>
            <p>Founder & Project Manager</p>
          </div>
          {/* Team Member 2 */}
          <div className="col-md-4 team-member">
            <img src="/assets/your-photo2.jpg" alt="Team Member 2" className="img-fluid" />
            <h5>John Doe</h5>
            <p>Lead Developer</p>
          </div>
          {/* Team Member 3 */}
          <div className="col-md-4 team-member">
            <img src="/assets/your-photo3.jpg" alt="Team Member 3" className="img-fluid" />
            <h5>Jane Smith</h5>
            <p>Risk Analyst</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComp;