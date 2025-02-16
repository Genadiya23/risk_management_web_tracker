import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import NavbarComp from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComp from './components/Login'
import LoginPic from './components/LoginPic'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () =>{
    const response = await axios.get('http://localhost:8080/api')
    console.log(response.data.testing)
  };

  useEffect(() =>{
    fetchAPI();
  },[])


  return (
    <>
    <nav className="navbar">
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
    </Router>
    </nav>
    <div>
      <LoginComp />
    </div>
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>

    </>
  )
}


export default App
