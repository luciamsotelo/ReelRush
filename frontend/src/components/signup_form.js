import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FormGroupExample() {
  return (
    <div>
      <p className='' style={{margin: '10px', padding: '10px', textAlign: 'justify', color:'darkblue'}}>
"Ready to explore Emiliano's world of fly tying, beach adventures, and impressive catches? Hook up now to cast in later and gain exclusive access to Emiliano's collection of fly patterns, favored fishing spots, and memorable catches. Join us on this angler's journey and unlock a world of fishing excellence!"</p>
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
      <Link to="/castIn">
      <Button variant="info" type="submit">
        Cast Away
      </Button></Link>
    </Form>
    </div>
  );
}

export default FormGroupExample;
