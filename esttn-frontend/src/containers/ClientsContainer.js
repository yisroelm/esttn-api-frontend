import React, { Component } from 'react' 
import { Card, Container } from 'semantic-ui-react'
import ClientCard from '../components/ClientCard';

class ClientsContainer extends Component {

  render() {
  // begin loading*************
  if (this.props.les.length > 0) {
    // debugger
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.les[0].clients.map( c => 
       <ClientCard key={c.id} client={c} />
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

export default ClientsContainer
