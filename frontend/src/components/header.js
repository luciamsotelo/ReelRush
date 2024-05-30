import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar className='' style={{background: '#d7e5f0', paddingTop: '40px'}}>
      <Container className=''>
        <Link to="/">
        <i className="fas fa-anchor" style={{fontSize: '24px', color: '#007bff', marginRight: '10px'}}></i>
          <Button variant="outline-primary" className="mr-auto">Dock</Button>
        </Link>
        <h1 className='mr-auto' style={{color: 'black', fontSize: '50px', fontFamily: 'fantasy', marginLeft: '2px', textAlign: 'center'}}>A Reel Rush</h1>
        <Link to="/flyFinder">
        <Button variant="outline-primary">Fly-Finder</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
