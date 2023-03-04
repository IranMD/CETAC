import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './SeccionCetac.css';

function SeccionCetac() {
  return (
    <>
      <header className='title'>Bachillerato Tecnólogico</header>
      <Container>
        <Row className='justify-content-center'>
          <p className='sub-section'>CONOCE NUESTRAS INSTALACIONES</p>
        </Row>
      </Container>
      <Row className='info-cetac'>

        <Col lg={6}>
          <Row className='justify-content-end videoContainer'>
            <iframe className='videoFb' src="https://www.youtube.com/embed/bMcF8LPIzYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Row>
        </Col>

        <Col lg={6} className='textContainer'>
          <div>
            <p className='name-cetac'>Centro de Estudios Tecnológicos en Aguas Continentales No. 05</p>
            <p className='description-cetac'>Es un Bachillerato Tecnológico, adscrito a la Dirección General de Educación
              Tecnológica Agropecuaria y Ciencias del Mar, dependiente de la Subsecretaría de
              Educación Media Superior. Nuestros estudiantes egresan con bachillerato tecnológico,
              y además cuentan con una formación profesional que les permite egresar con una carrera técnica.</p>
          </div>
        </Col>
      </Row>


    </>

  );
}

export default SeccionCetac;