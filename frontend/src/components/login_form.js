import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
  return (
    
    <div style={{
      backgroundImage: 'url("")', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '20px',
      textAlign: 'justify',
    }}>
    <Form className=''>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="info">Cast Away</Button>
    </Form>
    </div>
  );
}

export default FormGroupExample;