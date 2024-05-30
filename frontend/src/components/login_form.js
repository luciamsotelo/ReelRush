import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setValidationError('Both fields are required.');
      return;
    }

    const credentials = { email, password };

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const result = await response.json();

    if (response.status === 200) {
      setModalMessage(result.message);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/flyFinder'); // Redirect to the desired page after successful login
      }, 2000);
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <p className='' style={{ margin: '10px', padding: '10px', textAlign: 'justify', color: 'darkblue' }}>
        "Ready to dive into Emiliano's world of angling expertise? Cast in now to unlock exclusive access to his collection of fly patterns, favored fishing spots, and memorable catches. Sign in today and join the adventure!"
      </p>
      <Form className='' style={{ padding: '20px' }} onSubmit={handleLogin}>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="info" type="submit">
          Cast Away
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome Back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
