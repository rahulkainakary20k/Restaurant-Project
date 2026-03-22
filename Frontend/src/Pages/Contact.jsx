import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import React,{useState} from "react"
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields")
      return
    }
    toast.success("Message sent successfully!")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container className="my-5 flex-grow">
      <h2 className="text-center mb-4 text-3xl font-bold text-gray-800">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="bg-white p-4 p-md-5 rounded shadow-sm border border-gray-100">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label className="font-medium text-gray-700">Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-2 border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label className="font-medium text-gray-700">Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="contactMessage">
                <Form.Label className="font-medium text-gray-700">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Write your message here..." 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                />
              </Form.Group>

              <Button 
                variant="success" 
                type="submit" 
                className="w-100 bg-emerald-600 hover:bg-emerald-700 border-0 py-2 font-semibold text-white transition-colors"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col>
          <h4 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h4>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Facebook size={32} />
            </a>
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
              <Instagram size={32} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
