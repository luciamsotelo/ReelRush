import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      setResponseMessage('Feedback submitted successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setResponseMessage('');
        navigate('/flyFinder'); // Redirect to another page after successful submission
      }, 2000);
    } else {
      setResponseMessage(`Error: ${result.error}`);
    }
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h2 className="text-center mb-5">Contact Us</h2>
      <Row>
        <Col md={6} className="mb-8" style={{ border: '10px solid #ccc', padding: '20px' }}>
          <h4>Get in Touch</h4>
          <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
          <p><strong>Address:</strong> San Diego, CA</p>
          <p><strong>Phone:</strong> (520) 603-4075</p>
          <p><strong>Email:</strong> soteloemiliano@yahoo.com</p>
        </Col>
        <Col md={6} className='mb-8'>
          <h4>Drop us a Line</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
          {responseMessage && (
            <p className="mt-3" style={{ color: responseMessage.startsWith('Error') ? 'red' : 'green' }}>
              {responseMessage}
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

