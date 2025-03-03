import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginComp from './components/Login';
import SignUpComp from './components/SignUp';
import Container from 'react-bootstrap/Container';
import Start from './components/Start';
import AboutComp from './components/About';
import { ClerkProvider } from '@clerk/clerk-react';

function App() {
  const [count, setCount] = useState(0);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api');
    console.log(response.data.testing);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
      <Router>
        <MainContent/>
      </Router>
  );
}

// Separated the component to handle Navbar conditionally
function MainContent() {
  const location = useLocation(); // Get current route
  return (
    <>
      {/* Hide Navbar only on the /start route */}
      {location.pathname !== "/start" ? <NavbarComp /> : <CustomHeader />}

      <Container className="mt-4">
        <Routes>
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
          <Route path="/signup" element={<SignUpComp />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </Container>
    </>
  );
}

// 🔹 Custom Header for "/start" route
function CustomHeader() {
  return (
    <header className="custom-header">
      <div className="logo">Risk Management</div>
    </header>
  );
}



export default App;
