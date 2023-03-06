import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Footer.css';
import logo from './Imagenes/LogoFooter.png'

function Footer() {
  return (
    <>
      <Row className='footer'>

        <Col>
            <Image src={logo} className='logo-footer'>

            </Image>
        </Col>

        <Col>
          <div>
            <p>ACERCA DE</p>
            <p> </p>
          </div>
        </Col>

        <Col>
          <div>
            <p>OFERTA ACDÉMICA</p>
            <p> </p>
          </div>
        </Col>

                
        <Col>
          <div>
            <p>ASPIRANTES</p>
            <p> </p>
          </div>
        </Col>

        <Col>
          <div>
            <p>ALUMNOS</p>
            <p> </p>
          </div>
        </Col>
      </Row>
    </>

  );
}

export default Footer;