import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Footer.css';
import logo from './Imagenes/LogoFooter.png'
import dgetacym from './Imagenes/dgetacym.png'
import sep from './Imagenes/sep.png'
import { Facebook, Instagram, Phone, TelephoneFill, Tiktok, Youtube } from 'react-bootstrap-icons';

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
          <a href='https://www.facebook.com/CETAC05Oficial/?locale=es_LA'>
            <Facebook className='icons' />
          </a>
          <a href="https://instagram.com/cetac05oficial?igshid=YmMyMTA2M2Y=">
            <Instagram className='icons' />
          </a>
          <a href='https://www.tiktok.com/@cetac05oficial?_t=8aXNlEXKKz0&_r=1'>
            <Tiktok className='icons' />
          </a>
          <a href='https://youtube.com/@cetac05gral.felipedejesusa48'>
            <Youtube className='icons' />
          </a>
          <TelephoneFill className='icons' />
        </Container>
      </Col>

      <Col>
        <div>
          <p className='sub'>ACERCA DE CETAC 05</p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Directorio</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Instalaciones</a>
          </p>
          <p className='link-container'> 
            <a href='#' className='links-footer'>Deportes</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Arte y Cultura</a>
          </p>
        </div>
      </Col>

      <Col>
        <div>
          <p className='sub'>OFERTA ACADÉMICA</p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Recursos Hídricos</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Acuacultura</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Logística</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Administración de recursos humanos</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Sistemas de Información Geográfica</a>
          </p>
        </div>
      </Col>


      <Col>
        <div>
          <p className='sub'>ASPIRANTES</p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Convocatoria de admisión</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Inscripción nuevo ingreso</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Resultados de admisión</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Becas y apoyos</a>
          </p>
        </div>
      </Col>

      <Col>
        <div>
          <p className='sub'>ALUMNOS</p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Calendario escolar</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Horarios</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Avisos</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Servicio Social</a>
          </p>
          <p className='link-container'>
            <a href='#' className='links-footer'>Prácticas profesionales</a>
          </p>
        </div>
      </Col>

      <Row className='info-direccion'>
        <Col lg={7} className="col-direccion">
        <p className='p-direccion'>Hacienda Mesillas #421, Fracc.</p>
        <p className='p-direccion'>Haciendas de Aguascalientes, C.P. 20196,Aguascalientes, Ags.</p>
        </Col>
        <Col lg={3} className="logos-gob">
          <Image src={dgetacym} className='logo-sep-dgetacym'></Image>
          <Image src={sep} className='logo-sep-dgetacym'></Image>
        </Col>
      </Row>
    </Row>
    

  );
}

export default Footer;