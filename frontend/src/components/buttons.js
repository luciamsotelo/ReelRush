import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FormButtons() {
  return (
    <div className='d-flex justify-content-left' style={{padding: '10px'}}>
      <Link to="/castIn">
        <Button variant="outline-secondary" className="mr-auto" style={{marginRight: '25px'}}>Cast In</Button>
      </Link>{' '}
      <Link to="/hookUp">
        <Button variant="outline-secondary" className="mr-auto" style={{marginRight: '25px'}}>Hook Up</Button>
      </Link>{' '}
    </div>
  );
}

export default FormButtons;
