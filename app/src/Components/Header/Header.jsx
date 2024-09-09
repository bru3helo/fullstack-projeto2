import { } from 'react';
import "./Header.css";
import CreateMonstersButton from '../Monster/CreateMonsters/CreateMonsters';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar className='Header' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/fullstack-projeto2">Monster-API</Navbar.Brand>
          <Button className='button' href="/fullstack-projeto2/user/login" variant="dark">Login</Button>{' '}
          <CreateMonstersButton/>{' '}
          <Button className='button' href="/fullstack-projeto2/monster/add" variant="dark">Adicionar Monstro</Button>{' '}
        </Container>
    </Navbar>
  )
}

export default Header