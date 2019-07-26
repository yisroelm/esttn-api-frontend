import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <Container>
        <br/>
        <div className='center navbar'>
          <Link to='/'><Button size='medium' color='olive'>Le Profile</Button></Link>
          <Link to='/clients'><Button size='medium' color='red'>Clients</Button></Link>
          <Link to='/products'><Button size='medium' color='blue'>Products</Button></Link>
          <Link to='/appointments'><Button size='medium' color='green'>Appointments</Button></Link>
          <br/>
          <br/>
        </div>
    </Container>
  );
};

export default NavBar;