import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FishingTripDetails = () => (
  <Container>
    <h2 className="mb-4">Fishing Trip Details</h2>
    <p className='' style= {{textAlign: 'justify', color:'darkblue'}}>
"Welcome to the Trip Details Page!

Embark on a virtual journey through Emiliano's fishing adventures. Dive into the intricate details of each trip, from the captivating flies he ties to the serene beaches he frequents and the magnificent fish he reels in. Get ready to immerse yourself in the beauty of nature and the thrill of the catch. Let's make every trip an unforgettable experience together!"</p>
    <Row xs={1} md={3} className="g-4">
      {/* Card for describing the fishing fly used */}
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="/images/flychartruse.jpeg" alt="Fishing Fly" className="img-fluid" />
          <Card.Body>
            <Card.Title>Fishing Fly</Card.Title>
            <Card.Text>
              The fishing fly used during the trip. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
            <Button variant="info">Purchase</Button>
            <Link to="/flyFinder">
            <Button className="ml-2" style={{marginLeft: '20px'}} variant="info">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for describing the beach it was used on */}
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="/images/ocean.jpeg" alt="Beach" className="img-fluid" />
          <Card.Body>
            <Card.Title>Beach</Card.Title>
            <Card.Text>
              The beach where the fishing trip took place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for describing the fish caught */}
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src="/images/walleye.jpeg" alt="Fish Caught" className="img-fluid" />
          <Card.Body>
            <Card.Title>Fish Caught</Card.Title>
            <Card.Text>
              The fish caught during the trip. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default FishingTripDetails;
