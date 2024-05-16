import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Container fluid>
      <Carousel data-bs-theme="dark" style={{ margin: '10px 10px 20px 10px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="./images/ocean.jpeg"
            alt="First slide"
            style={{ objectFit: 'cover', maxHeight: '300px' }} // Maintain aspect ratio
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
            style={{ objectFit: 'cover', maxHeight: '300px' }} // Maintain aspect ratio
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://hellscanyon.tours/wp-content/uploads/2023/01/RiverAdventuresInc-214207-Pieces-Fishing-Equipment-blogbanner1-1080x675.jpg"
            alt="Third slide"
            style={{ objectFit: 'cover', maxHeight: '300px' }} // Maintain aspect ratio
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default DarkVariantExample;
