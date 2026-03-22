
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header'

import Navs from "./Components/Navbar"

import Home from "./Pages/Home"
import MenuPage from "./Pages/MenuPage"

import CartPage from "./Pages/CartPage"
import Login from "./Pages/Login"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

import Register from "./Pages/Register"
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './Services/CartContext'


function App() {

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <Navs />

          <main className="flex-grow flex flex-col">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              </Routes>
          </main>
          
          {/* <Footer /> */}
        </div>
        <ToastContainer position="bottom-right" />
      </Router>
    </CartProvider>
  )
}

export default App

