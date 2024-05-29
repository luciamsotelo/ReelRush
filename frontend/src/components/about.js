import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Founder',
    
    image: '/images/em1.jpeg',
    bio: 'Meet Emiliano Sotelo, our founder. With a vision for innovation and excellence, Emiliano leads our company forward. Join us as we explore the world of fishing through his eyes.'
  },
  {
    name: 'Fishing Enthusiast',
    
    image: '/images/em2.jpeg',
    bio: 'Jane is a tech enthusiast with a passion for developing cutting-edge solutions. She oversees all technical aspects of the company.'
  },
  {
    name: 'Fly Tying Expert',
    
    image: '/images/em3.jpeg',
    bio: 'Jane is a tech enthusiast with a passion for developing cutting-edge solutions. She oversees all technical aspects of the company.'
  },
];

const AboutUs = () => (
  <Container style={{ padding: '50px 0' }}>
    <h2 className="text-center mb-5">Meet Our Fisherman Emiliano Sotelo</h2>
    <Row>
      {teamMembers.map((member, index) => (
        <Col md={4} sm={6} xs={12} key={index} className="mb-4">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={member.image} alt={member.name} style={{ objectFit: 'cover', height: '50%' }} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
              <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AboutUs;
