import { Container, Row, Col, Image } from 'react-bootstrap'
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

const About = () => {
  return (
    <Container className="my-5 flex-grow">
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Image 
            src="https://images.unsplash.com/photo-1719204089341-11dec48eae19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" 
            fluid 
            rounded 
            className="shadow-lg hover:scale-105 transition-transform duration-500"
            alt="Restaurant photos"
          />
        </Col>
        <Col md={6}>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About EatBay</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Welcome to EatBay, your number one source for the most delicious and authentic culinary experiences. We're dedicated to giving you the very best food, with a focus on taste, customer service, and uniqueness.
          </p>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Founded in 2023, EatBay has come a long way from its beginnings. When we first started out, our passion for providing the best dining experience drove us to turn hard work and inspiration into to a booming online food delivery and reservation platform.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We hope you enjoy our meals as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5 mb-4">
        <Col>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4} className="mb-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 h-100 hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-emerald-600 mb-3">Quality food</h4>
            <p className="text-gray-600">We source only the finest ingredients to ensure every dish meets our high standards.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 h-100 hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-emerald-600 mb-3">Exceptional Service</h4>
            <p className="text-gray-600">Our team is committed to providing you with a memorable and pleasant dining experience.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 h-100 hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-emerald-600 mb-3">Community</h4>
            <p className="text-gray-600">We believe in giving back and being an active part of the community we serve.</p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 mb-4 text-center">
        <Col>
          <h4 className="text-xl font-bold text-gray-900 mb-4">Follow On Media</h4>
          <div className="flex justify-center gap-4">
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Facebook size={35} />
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

export default About
