import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Ubicacion.css';

function Ubicacion() {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <p className='sub-section'>¿DÓNDE ENCONTRARNOS?</p>
        </Row>
      </Container>
      <Row className='mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.146471515717!2d-102.25292348505255!3d21.890434785537963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429f1e3dd0f9b07%3A0x6e2768fa5e84d133!2sCentro%20De%20Estudios%20Tecnologicos%20En%20Aguas%20Continentales%2005!5e0!3m2!1ses-419!2smx!4v1677822921450!5m2!1ses-419!2smx" height="350" width="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Row>

    </>
  );
}

export default Ubicacion;