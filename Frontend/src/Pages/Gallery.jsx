import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  ];

  return (
    <Container className="my-5 flex-grow">
      <h2 className="text-center mb-4 text-3xl font-bold text-gray-800">Our Gallery</h2>
      <Row>
        {images.map((img, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-sm border-0 h-100 overflow-hidden rounded-lg">
              <Card.Img 
                variant="top" 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="hover:scale-105 transition-transform duration-300"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Gallery
