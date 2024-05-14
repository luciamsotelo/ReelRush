import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FormButtons() {
  return (
    <>
      <Link to="/castIn">
        <Button variant="outline-secondary">Cast In</Button>
      </Link>{' '}
      <Link to="/hookUp">
        <Button variant="outline-secondary">Hook Up</Button>
      </Link>{' '}
    </>
  );
}

export default FormButtons;
