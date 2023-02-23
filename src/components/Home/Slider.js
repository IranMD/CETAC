import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import fondo from './Imagenes/Slider.png'
import example from './Imagenes/example.png'
import { Row } from 'react-bootstrap';

function Slider() {
  return (
    <>
    <img src={fondo} className="fondo"/>
    <Carousel>
        
      <Carousel.Item>
        <img
          className="image-size"
          src={example}
          alt="Second slide"
        />

        <Carousel.Caption className='texto-slider'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="image-size"
          src={example}
          alt="Third slide"
        />

        <Carousel.Caption className='texto-slider'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Row className='notificationBar'>
      <p className='notificationText'> Próximas inscripciones 14 de febrero del año en curso</p>
    </Row>
    </>
  );
}

export default Slider;