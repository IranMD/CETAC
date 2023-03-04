import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from './Imagenes/logo.png'
import './Navbar.css';

function Menu() {
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container className='menu-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className='texto'>Nosotros</Nav.Link>
            <Nav.Link href="#link" className='texto'>Oferta educativa</Nav.Link>
            <NavDropdown title="Aspirantes"  className='dropdown'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='texto'>Estudiantes</Nav.Link>
            <Nav.Link href="#link" className='texto'>Egresados</Nav.Link>
            <Nav.Item> 
              <Image className='logo-cetac' src={logo}/>
            </Nav.Item>
            <Nav.Link href="#link" className='texto'>Docentes</Nav.Link>
            <Nav.Link href="#link" className='texto'>Convocatorias</Nav.Link>
            <Nav.Link href="#link" className='texto'>Becas</Nav.Link>
            <Nav.Link href="#link" className='texto'>Noticias/Eventos</Nav.Link>
            <Nav.Link href="#link" className='texto'>Directorio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;