import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Container fluid className='p-10' data-bs-theme="light">
      <Carousel>
        <Carousel.Item data-bs-theme="dark">
          <img
            className="d-block w-100 img-fluid"
            src="./images/halibut.jpeg"
            alt="halibut"
            style={{ objectFit: 'cover', maxHeight: '400px' }} // Increased maxHeight
          />
          <Carousel.Caption className='bg-dark bg-opacity-25' style={{borderRadius: '100px'}}>
            <h5 className="" style={{color:'lightblue', textShadow: '2px 2px 4px darkblue'}}>Just for the Halibut</h5>
            <p className=''style={{color:'white', margin: '20px'}}>Nearly all halibut have both eyes on the right-hand side of the fish. About 1 in every 20,000 halibut has its eyes on the left side.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-bs-theme="dark">
          <img
            className="d-block w-100 img-fluid"
            src="./images/stingray.jpeg"
            alt="stingray"
            style={{ objectFit: 'cover', maxHeight: '400px' }} // Increased maxHeight
          />
          <Carousel.Caption className='bg-dark bg-opacity-25' style={{borderRadius: '100px'}}>
          <h5 className="" style={{color:'lightblue', textShadow: '2px 2px 4px darkblue'}}>Shovel Nose Guitar Fish</h5>
            <p className=''style={{color:'white', margin: '20px'}}>Despite their guitar-like shape, these fish are incredibly agile swimmers and often use their flattened bodies to glide gracefully along the ocean floor, hunting for prey like crustaceans and small fish.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-bs-theme="dark" style={{ margin: '10px 10px 20px 10px' }}>
          <img
            className="d-block w-100 img-fluid"
            src="./images/shark.jpeg"
            alt="shark"
            style={{ objectFit: 'cover', maxHeight: '400px' }} // Increased maxHeight
          />
          <Carousel.Caption className='bg-dark bg-opacity-25' style={{borderRadius: '100px'}}>
            <h5 className="" style={{color:'lightblue', textShadow: '2px 2px 4px darkblue'}}>Baby Shark, doo doo doo doo doo doo</h5>
            <p>
            Leopard sharks are known for their oval-shaped "leopard" markings, which include dark, saddle-shaped splotches along their fins and upper body.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-bs-theme="dark">
          <img
            className="d-block w-100 img-fluid"
            src="./images/barredsurfperch.jpeg"
            alt="perch"
            style={{ objectFit: 'cover', maxHeight: '400px' }} // Increased maxHeight
          />
          <Carousel.Caption className='bg-dark bg-opacity-25' style={{borderRadius: '100px'}}>
            <h5 className="" style={{color:'lightblue', textShadow: '2px 2px 4px darkblue'}}>Surfing Striped Stunner Perch </h5>
            <p>Barred surf perch are skilled hunters that thrive in coastal areas where waves crash onto sandy beaches or rocky shores. They've adapted to ride the waves and use the turbulence to their advantage when hunting for food, making them agile predators along the shoreline.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-bs-theme="dark">
          <img
            className="d-block w-100 img-fluid"
            src="./images/corbina.jpeg"
            alt="corbina"
            style={{ objectFit: 'cover', maxHeight: '400px' }} // Increased maxHeight
          />
          <Carousel.Caption className='bg-dark bg-opacity-25' style={{borderRadius: '100px'}}>
            <h5 className="" style={{color:'lightblue', textShadow: '2px 2px 4px darkblue'}}>Corbina the Savvy Sand Sniffer</h5>
            <p>Corbina are known for their strong sense of smell, which they use to locate prey buried in the sand.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default DarkVariantExample;
