import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Services/firebaseConfig'
import { toast } from 'react-toastify'

function Navs() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out successfully")
      navigate('/login');
    } catch (error) {
      console.error ("Logout error:",error)
      toast.error("Error logging out")
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-emerald-500 text-2xl font-extrabold tracking-wide hover:text-emerald-400 transition-colors'>
          EatBay !
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="font-medium hover:text-white transition">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu" className="font-medium hover:text-white transition">Menu</Nav.Link>
              <Nav.Link as={Link} to="/about" className="font-medium hover:text-white transition">About</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="font-medium hover:text-white transition">Cart</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="font-medium hover:text-white transition">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="font-medium hover:text-white transition">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto flex items-center gap-3">
              {user ? (
                <>
                  <span className="text-gray-300 text-sm italic mr-2">Hello, {user.email?.split('@')[0]}</span>
                  <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors px-3 py-2">Login</Link>
                  <Link to="/register" className="text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm">Sign Up</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </>
  )
}

export default Navs
