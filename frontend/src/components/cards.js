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
      image: 'https://www.pierfishing.com/wp-content/uploads/2017/03/IBP_2007_Pier6.jpg',
      title: 'Imperial Beach',
      text: 'Known for its serene beauty and stunning sunsets, Imperial Beach offers wide stretches of golden sand, perfect for leisurely walks and picnics. It is a tranquil escape, ideal for those seeking relaxation away from the crowds.',
      link: '/imperial'
    },
    {
      image: 'https://greatruns.com/wp-content/uploads/2016/09/SanDiego5.jpg',
      title: 'Coronado Beach',
      text: 'Famous for its shores and iconic Hotel del Coronado, this beach provides a picturesque setting for sunbathing and beachcombing. Its historic charm and breathtaking views make it a must-visit destination for travelers.',
      link: '/coronado'
    },
    {
      image: 'https://tanamatales.com/wp-content/uploads/2014/03/DSC04057.jpg',
      title: 'Ocean Beach',
      text: 'With its laid-back atmosphere and eclectic vibe, Ocean Beach is a haven for surfers, fishermen, and beach lovers. The vibrant community, quirky shops, and waterfront dining options add to its unique character and charm.',
      link: '/ocean'
    },
    {
      image: 'https://resizer.otstatic.com/v2/photos/wide-huge/1/32428515.jpg',
      title: 'Mission Beach',
      text: 'Offering a lively boardwalk and bustling atmosphere, Mission Beach is perfect for family fun and outdoor activities. From rollerblading and biking to surfing and volleyball, there is something for everyone to enjoy along its vibrant coastline.',
      link: '/mission'
    },
    {
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/152000/152282-Pacific-Beach.jpg',
      title: 'Pacific Beach',
      text: 'Known for its trendy bars, restaurants, and vibrant nightlife, Pacific Beach exudes a youthful energy and coastal charm. Surfers flock to its waves, while beachgoers soak up the sun and soak in the lively ambiance.',
      link: '/pacific'
    },
    {
      image: 'https://fox5sandiego.com/wp-content/uploads/sites/15/2023/04/AdobeStock_284439394.jpeg?w=2560&h=1440&crop=1',
      title: 'La Jolla Shores',
      text: 'Having a picturesque cove and gentle waves, La Jolla Shores is a paradise for water sports enthusiasts. From snorkeling and kayaking to swimming and sunbathing, visitors can enjoy a variety of activities amidst stunning natural beauty.',
      link: '/jolla'
    },
    {
      image: 'https://www.cardiffvacations.com/media/images/moonlight-state-beach.jpg',
      title: 'Encinitas Beach',
      text: 'With its charming coastal community and world-class surf spots, Encinitas Beach offers a laid-back atmosphere and unbeatable ocean views. Explore quaint shops, dine at local eateries, or simply relax on the sand and soak in the vibe.',
      link: '/encinitas'
    },
    {
      image: 'https://grubbyspoke.com/wp-content/uploads/2021/12/Best-things-to-do-in-carlsbad-ca.jpg',
      title: 'Carlsbad Beach',
      text: 'Family-friendly amenities abound at Carlsbad Beach, including playgrounds, picnic areas, and scenic walking paths. Its wide sandy shores and gentle waves make it a perfect destination for families and beachgoers of all ages.',
      link: '/carlsbad'
    },
    {
      image: 'https://www.thebrickhotel.com/area-guide/activities/beach/us_oceanside_us_header/',
      title: 'Oceanside Beach',
      text: 'With its panoramic ocean views, Oceanside Beach is an idyllic spot for sunbathing, swimming, and beach volleyball. Its vibrant pier, recreational activities, and beachfront dining options ensure there is never a dull moment by the sea.',
      link: '/oceanside'
    }
  ];

  return (
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
                <Button variant="info">Reel In</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
