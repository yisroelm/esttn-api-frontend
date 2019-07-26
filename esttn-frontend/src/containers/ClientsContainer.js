import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import ClientCard from '../components/ClientCard';

class ClientsContainer extends Component {

  render() {
    console.log(this.props.clients)
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.clients.map( c => 
       <ClientCard key={c.id} client={c} />
     )}
    </div>
    </Card.Group>
    </Container>
    )  
  } 
}

const mapStateToProps = state => {
  return {clients: state.clients}
 }
 
 export default connect(mapStateToProps, null)(ClientsContainer)
