import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import AppointmentCard from '../components/AppointmentCard';

class AppointmentsContainer extends Component {

  render() {
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.appointments.map( a => 
       <AppointmentCard key={a.id} appointment={a} />
     )}
    </div>
    </Card.Group>
    </Container>
    )
  }
}  

const mapStateToProps = state => {
  return {appointments: state.appointments}
 }
 
 export default connect(mapStateToProps, null)(AppointmentsContainer)

