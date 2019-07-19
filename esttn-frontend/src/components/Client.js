import React, { Component } from 'react'

class Client extends React.Component {
  state = { clients: []}

  componentDidMount(){
    fetch('http//localhost:3000/les')
    .then(function(response){
      return response.json();
    })
    .then(clients => this.setState({clients}));
  }

  render() {
    return <h1>clients Component</h1>
    }
  }

  export default Client