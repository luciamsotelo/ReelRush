import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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
      alert(result.message);
      navigate('/flyFinder'); // Redirect to the desired page after successful login
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
    </div>
  );
};

export default Login;
