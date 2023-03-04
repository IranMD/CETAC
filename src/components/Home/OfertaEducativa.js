import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import recursosHidricos from './Imagenes/recursosHidricos.png'
import './OfertaEducativa.css';

function OfertaEducativa() {
  return (
    <Container>
      <Row className='info-oferta'>
        <Row className='justify-content-center'>
          <p className='sub-section'>OFERTA EDUCATIVA</p>
        </Row>
        <Card style={{ width: '18rem' }} className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Recursos Hídricos</Card.Title>
            <Card.Text>
              Realiza actividades dirigidas a la toma, análisis y tratamiento de aguas, auxilia en la operación de sistemas hídricos aplicando la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Acuacultura</Card.Title>
            <Card.Text>
              Realiza actividades dirigidas a la toma, análisis y tratamiento de aguas, auxilia en la operación de sistemas hídricos aplicando la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Logística</Card.Title>
            <Card.Text>
              Realiza actividades dirigidas a la toma, análisis y tratamiento de aguas, auxilia en la operación de sistemas hídricos aplicando la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className='info-oferta'>
        <Card style={{ width: '18rem' }} className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Administración de Recursos Humanos</Card.Title>
            <Card.Text>
              Realiza actividades dirigidas a la toma, análisis y tratamiento de aguas, auxilia en la operación de sistemas hídricos aplicando la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Sistemas de Información Geográfica</Card.Title>
            <Card.Text>
              Realiza actividades dirigidas a la toma, análisis y tratamiento de aguas, auxilia en la operación de sistemas hídricos aplicando la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

    </Container>
  );
}

export default OfertaEducativa;