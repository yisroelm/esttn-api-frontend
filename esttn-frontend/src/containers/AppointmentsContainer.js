import React, { Component } from 'react' 
import { Card, Container } from 'semantic-ui-react'
import AppointmentCard from '../components/AppointmentCard';

class AppointmentsContainer extends Component {

  render() {
  // begin loading*************
  if (this.props.les.length > 0) {
    // debugger
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.les[0].appointments.map( a => 
       <AppointmentCard key={a.id} appointment={a} />
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
}

export default AppointmentsContainer
