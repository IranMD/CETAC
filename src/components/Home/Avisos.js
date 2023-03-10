import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Avisos.css';

function Avisos() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <p className='sub-section'>AVISOS</p>
                </Row>
            </Container>
            <Carousel responsive={responsive} className="seccion-noticias">
                <Card style={{ width: '18rem' }} className="card-avisos">
                    <Card.Img variant="top" src="https://i.postimg.cc/VNFjSRmn/Rectangle-18.png" />
                    <Card.Body className='cardBody-avisos'>
                        <Card.Title className='title-card-avisos'>Atención Alumnos Egresados en el año 2020</Card.Title>
                        <Card.Text className='text-card-avisos'>
                            Enero 15, 2023 por Iran Mendoza
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-avisos">
                    <Card.Img variant="top" src="https://i.postimg.cc/VNFjSRmn/Rectangle-18.png" />
                    <Card.Body className='cardBody-avisos'>
                        <Card.Title className='title-card-avisos'>Atención Alumnos Egresados en el año 2020</Card.Title>
                        <Card.Text className='text-card-avisos'>
                            Enero 15, 2023 por Iran Mendoza
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-avisos">
                    <Card.Img variant="top" src="https://i.postimg.cc/VNFjSRmn/Rectangle-18.png" />
                    <Card.Body className='cardBody-avisos'>
                        <Card.Title className='title-card-avisos'>Atención Alumnos Egresados en el año 2020</Card.Title>
                        <Card.Text className='text-card-avisos'>
                            Enero 15, 2023 por Iran Mendoza
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-avisos">
                    <Card.Img variant="top" src="https://i.postimg.cc/VNFjSRmn/Rectangle-18.png" />
                    <Card.Body className='cardBody-avisos'>
                        <Card.Title className='title-card-avisos'>Atención Alumnos Egresados en el año 2020</Card.Title>
                        <Card.Text className='text-card-avisos'>
                            Enero 15, 2023 por Iran Mendoza
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-avisos">
                    <Card.Img variant="top" src="https://i.postimg.cc/VNFjSRmn/Rectangle-18.png" />
                    <Card.Body className='cardBody-avisos'>
                        <Card.Title className='title-card-avisos'>Atención Alumnos Egresados en el año 2020</Card.Title>
                        <Card.Text className='text-card-avisos'>
                            Enero 15, 2023 por Iran Mendoza
                        </Card.Text>
                    </Card.Body>
                </Card>

        

            </Carousel>
        </>
    );
}

export default Avisos;