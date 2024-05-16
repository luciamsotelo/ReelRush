import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    },
    {
      image: '/images/flychartruse.jpeg',
      title: 'Fly Chartruse $15',
      text: 'information about Fly Chartruse needed here',
      link: '/buy'
    }
  ];

  return (
    <div>
      <p className='' style={{margin: '10px', padding: '10px', textAlign: 'justify', color:'darkblue'}}>"Discover Emiliano's meticulously crafted flies, each with its own unique story. Click to explore detailed information about the fly, the scenic beach where it was used, and the thrilling fish it enticed. Let the journey begin!"</p>
    <Row xs={1} md={2} lg={3} className="g-4" style={{ marginBottom: '100px' }}>
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card style={{ border: '5px inset coral', margin: '10px 30px 10px 30px', padding: '10px 10px 10px 10px', height: '100%' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
              
              {/* Use Link component instead of Button */}
              <Link to={card.link}>
                <Button variant="info">Reel It In</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default GridExample;
