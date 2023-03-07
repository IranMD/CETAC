import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Footer.css';
import logo from './Imagenes/LogoFooter.png'
import { ArrowRight, Facebook, Instagram, Phone, TelephoneFill, Whatsapp } from 'react-bootstrap-icons';

function Footer() {
  return (
    <Row className='section-footer'>

      <Col>
        <Container className='logo-section'>
          <Image src={logo} className='logo-footer' />
        </Container>
        <Container className='name-footer'>
          <p className='name-footer'>Centro de Estudios Tecnológicos en Aguas Continentales No. 05</p>
        </Container>

        <Container className='group-icons'>
          <Facebook className='icons'/>
          <Instagram className='icons'/>
          <Whatsapp className='icons'/>
          <TelephoneFill className='icons'/>
        </Container>
      </Col>

      <Col>
        <div>
          <p className='sub'>ACERCA DE</p>
          <p> </p>
        </div>
      </Col>

      <Col>
        <div>
          <p className='sub'>OFERTA ACADÉMICA</p>
          <p> </p>
        </div>
      </Col>


      <Col>
        <div>
          <p className='sub'>ASPIRANTES</p>
          <p> </p>
        </div>
      </Col>

      <Col>
        <div>
          <p className='sub'>ALUMNOS</p>
          <p> </p>
        </div>
      </Col>
    </Row>

  );
}

export default Footer;