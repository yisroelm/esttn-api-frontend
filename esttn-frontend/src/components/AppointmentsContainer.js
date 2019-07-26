import React, { Component } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import AppointmentCard from './AppointmentCard';

const AppointmentsContainer = (props) => {

  // begin loading*************
  if (props.les.length > 0) {
 
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {props.les[0].appointments.map( a => 
       <AppointmentCard appointments={props.appointments} />
     )}
    </div>
    </Card.Group>
    </Container>
    )  
    } 
    else {
      return(
      <h4>Loading...</h4>)
    } 
  }

export default AppointmentsContainer
