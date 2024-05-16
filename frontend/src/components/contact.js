import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => (
  <Container style={{ padding: '50px 0' }}>
    <h2 className="text-center mb-5">Contact Us</h2>
    <Row>
      <Col md={6} className="mb-4" style={{border: '10px solid #ccc', padding: '20px'}}>
        <h4>Get in Touch</h4>
        <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
        <p><strong>Address:</strong> San Diego, CA</p>
        <p><strong>Phone:</strong> (520) 603-4075</p>
        <p><strong>Email:</strong> soteloemiliano@yahoo.com</p>
      </Col>
      <Col md={6}>
        <h4>Drop us a Line</h4>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formSubject" className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
          </Form.Group>
          <Link to="/flyFinder">
          <Button variant="info" type="submit">
            Submit
          </Button></Link>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
