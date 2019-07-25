import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <Container>
        <br/>
        <div class='navbar' class='center'>
          <Link to='/' exact><Button size='massive' color='purple'>Les</Button></Link>
          <Link to='/clients' exact><Button size='massive' color='red'>Clients</Button></Link>
          <Link to='/products' exact><Button size='massive' color='blue'>Products</Button></Link>
          <Link to='/appointments' exact><Button size='massive' color='grey'>Appointments</Button></Link>
          <br/>
          <br/>
        </div>
    </Container>
  );
};

export default NavBar;