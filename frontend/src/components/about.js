import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/em1.jpeg',
    bio: 'John has over 20 years of experience in the industry and leads the company with a vision for innovation and excellence.'
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/jane-smith.jpg',
    bio: 'Jane is a tech enthusiast with a passion for developing cutting-edge solutions. She oversees all technical aspects of the company.'
  },
  // Add more team members as needed
];

const AboutUs = () => (
  <Container style={{ padding: '50px 0' }}>
    <h2 className="text-center mb-5">Meet Our Fishermen</h2>
    <p className = '' style={{textAlign: 'justify', color:'darkblue'}}>"Meet Emiliano, the driving force behind our fishing haven. Explore his expertise, adventures, and the wonders of the fishing realm. Let's cast our lines together and dive into the depths of fishing excellence!"</p>
    <Row>
      {teamMembers.map((member, index) => (
        <Col md={4} sm={6} xs={12} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={member.image} alt={member.name} />
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
