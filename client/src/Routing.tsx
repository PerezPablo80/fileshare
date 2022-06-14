import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

function Routing() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href='/'>Selector de archivos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/list">Listar Archivos</Nav.Link>
        <Nav.Link href="/load">Agregar archivo</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
/**<Route path='/' element={<App/>}/>
      <Route path='/list' element={<FilesList/>}/>
	  <Route path='/listc' element={<FilesListClass/>}/>
      <Route path='/*' element={<FormLoad/>}/> */

export default Routing;
