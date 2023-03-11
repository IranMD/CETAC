import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import recursosHidricos from './Imagenes/recursosHidricos.png'
import acuacultura from './Imagenes/acuacultura.png'
import logistica from './Imagenes/logistica.png'
import recursosHumanos from './Imagenes/rec-humanos.png'
import informacionGeografica from './Imagenes/info-geografica.png'
import './OfertaEducativa.css';

function OfertaEducativa() {
  return (
    <Container margin-bottom={"10px"}>
      <Row className='justify-content-center'>
        <p className='sub-section'>OFERTA EDUCATIVA</p>
      </Row>
  
      <Row className='info-oferta'>
        <Card className="card-oferta">
          <Card.Img variant="top" src={recursosHidricos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Recursos Hídricos</Card.Title>
            <Card.Text className='text-oferta'>
              Realiza actividades dirigidas a la toma,
              análisis y tratamiento de aguas, auxilia en
              la operación de sistemas hídricos aplicando
              la sustentabilidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-oferta">
          <Card.Img variant="top" src={acuacultura} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Acuacultura</Card.Title>
            <Card.Text className='text-oferta'>
              Realiza actividades dirigidas a la
              reproducción controlada, pre-engorda y
              engorda de especies de la fauna y flora
              acuática por medio de técnicas de cría o
              cultivo; susceptibles de explotación
              comercial, ornamental o recreativa.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-oferta">
          <Card.Img variant="top" src={logistica} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Logística</Card.Title>
            <Card.Text className='text-oferta'>
              Ejecuta actividades dirigidas a la
              supervisión,evaluación, control y
              seguimiento del proceso logístico
              aplicable al comercio de mercancías.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className='info-oferta'>
        <Card className="card-oferta-2">
          <Card.Img variant="top" src={recursosHumanos} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Administración de Recursos Humanos</Card.Title>
            <Card.Text className='text-oferta'>
              El estudiante integra al personal a la
              organización, asiste en actividades de
              capacitación, desarrollo y evaluación del
              personal, así como determina las
              remuneraciones al personal.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-oferta-2">
          <Card.Img variant="top" src={informacionGeografica} className="icon" />
          <Card.Body>
            <Card.Header className='header-oferta'>Técnico en</Card.Header>
            <Card.Title className='title-oferta'>Sistemas de Información Geográfica</Card.Title>
            <Card.Text className='text-oferta'>
              Realiza actividades dirigidas a la generación
              de información geográfica, misma que será
              capaz de manipular y procesar en software
              SIG, así como actividades de búsqueda y
              obtención de información espacial
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default OfertaEducativa;