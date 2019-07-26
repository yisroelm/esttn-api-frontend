import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <Container>
        <br/>
        <div class='navbar' class='center'>
          <Link to='/' exact><Button size='medium' color='olive'>Les</Button></Link>
          <Link to='/clients' exact><Button size='medium' color='red'>Clients</Button></Link>
          <Link to='/products' exact><Button size='medium' color='blue'>Products</Button></Link>
          <Link to='/appointments' exact><Button size='medium' color='green'>Appointments</Button></Link>
          <br/>
          <br/>
        </div>
    </Container>
  );
};

export default NavBar;