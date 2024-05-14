import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
  return (
    <Form className='' style={{padding: '20px'}}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormGroupExample;
