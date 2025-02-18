import { useState, useEffect } from 'react';
import './App.css';
import './components/Navbar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComp from './components/Login';
import SignUpComp from './components/SignUp';
import Container from 'react-bootstrap/Container';

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
  // <Router> {/* Wrap the entire app in Router */}
  //     <NavbarComp /> {/* Navbar stays persistent across all pages */}

  //     <Container className="mt-4">
  //       <Routes>
  //         {/* <Route path="/" element={<Home />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contact" element={<Contact />} /> */}
  //         <Route path="/signup" element={<SignUpComp />} />
  //         <Route path="/login" element={<LoginComp />} />
  //       </Routes>
  //     </Container>
  //   </Router>
            <>
            <Router>
            <nav className="navbar">
              <NavbarComp />
              <Routes>
                <Route path="/home" element={<h1>Home Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/contact" element={<h1>Contact Us</h1>} />
              </Routes>
            </nav>
            <div>
              <LoginComp />
              <Routes>
              <Route path="/signup" element={<SignUpComp />} />
              <Route path="/login" element={<LoginComp />} />
              </Routes>
            </div>
            </Router>
            </>

  );
}


export default App
