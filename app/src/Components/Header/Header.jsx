import { } from 'react';
import "./Header.css";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/fullstack-projeto2">Monster-API</Navbar.Brand>
          <Button className='button' href="/fullstack-projeto2/user/login" variant="dark">Login</Button>{' '}
        </Container>
    </Navbar>
  )
}

export default Header