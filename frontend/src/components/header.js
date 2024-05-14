import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar className='' style={{background: '#d7e5f0'}}>
      <Container className=''>
        <Link to="/">
          <Button variant="outline-primary" className="mr-auto">Home</Button>
        </Link>
        <h1 className='mr-auto' style={{color: 'red', fontSize: '50px', fontFamily: 't'}}>A Reel Rush</h1>
        <Link to="/flyFinder">
        <Button variant="outline-primary">Fly-Finder</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
