import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import { Link } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';
function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' style={{position:"fixed",width:"100vw"}}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{marginLeft:"12px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/about" style={{marginLeft:"12px",color:"white",textDecoration:"none"}}>About</Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;