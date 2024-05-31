import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Founder',
    
    image: '/images/em1.jpeg',
    bio: 'Meet Emiliano Sotelo, our founder. With a lifelong passion for fishing and a vision for innovation and excellence, Emiliano leads our company forward. His journey from avid angler to industry leader is marked by a dedication to perfecting the art of fly tying, creating gear that blends tradition with cutting-edge techniques. Join us as we explore the world of fishing through his eyes and experience the meticulous craftsmanship and deep expertise that define our brand.'
  },
  {
    name: 'Fishing Enthusiast',
    
    image: '/images/em2.jpeg',
    bio: 'Emiliano is a passionate fishing enthusiast who has spent countless hours perfecting his technique and sharing his love for the sport with others. Emiliano\'s expertise and enthusiasm inspire us all to cast our lines a little farther and appreciate the serenity and excitement that fishing brings.'
  },
  {
    name: 'Fly Tying Expert',
    
    image: '/images/em3.jpeg',
    bio: 'Emiliano is a master of fly tying, a skill he has honed over many years. His intricate and innovative fly patterns are celebrated by anglers worldwide, reflecting his deep understanding of aquatic ecosystems and fish behavior. Emiliano’s expertise in fly tying is at the heart of our company, driving us to create top-quality products that enhance every fishing experience. His dedication and artistry inspire our team and community, elevating the craft of fly fishing to new heights.'
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
