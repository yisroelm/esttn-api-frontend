import React, { Component } from 'react'

class Appointment extends React.Component {
  state = { appointments: []}

  componentDidMount(){
    fetch('http//localhost:3000/les')
    .then(function(response){
      return response.json();
    })
    .then(appointments => this.setState({appointments}));
  }

  render() {
    return <h1>appointments Component</h1>
    }
  }

  export default Appointment