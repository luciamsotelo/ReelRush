import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setValidationError('All fields are required.');
      return;
    }

    const newUser = { firstName, lastName, email, password };

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const result = await response.json();

    if (response.status === 201) {
      setModalMessage(result.message);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/castIn'); // Redirect to login or another page after successful registration
      }, 2000);
    } else {
      alert(result.message);
    }
  };

  return (
    <div className='' style={{ backgroundImage: 'url(./images/ocean.jpeg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
      <p className='' style={{ margin: '10px', padding: '10px', textAlign: 'justify', color: 'darkblue' }}>
        "Ready to explore Emiliano's world of fly tying, beach adventures, and impressive catches? Hook up now to cast in later and gain exclusive access to Emiliano's collection of fly patterns, favored fishing spots, and memorable catches. Join us on this angler's journey and unlock a world of fishing excellence!"
      </p>
      <Form className='' style={{ padding: '20px' }} onSubmit={handleRegister}>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label className='' style={{ color: 'white', textShadow: '2px 2px 10px black' }}>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label style={{ color: 'white', textShadow: '2px 2px 10px black' }}>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label style={{ color: 'white', textShadow: '2px 2px 10px black' }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label style={{ color: 'lightblue', textShadow: '2px 2px 10px black' }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="info" type="submit">
          Cast Away
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
