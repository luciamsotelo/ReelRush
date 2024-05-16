import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FormGroupExample() {
  return (
    
    <div>
      <p className='' style={{margin: '10px', padding: '10px', textAlign: 'justify', color:'darkblue'}}>"Ready to dive into Emiliano's world of angling expertise? Cast in now to unlock exclusive access to his collection of fly patterns, favored fishing spots, and memorable catches. Sign in today and join the adventure!"</p>
    <Form className='' style={{padding: '20px'}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to ="/flyFinder">
      <Button variant="info">Cast Away</Button></Link>
    </Form>
    </div>
  );
}

export default FormGroupExample;