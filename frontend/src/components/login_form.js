import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
  return (
    <Form className='' style={{padding: '100px'}}>
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
  );
}

export default FormGroupExample;