import React, { Component } from 'react'

class Le extends React.Component {
  state = { les: []}

  componentDidMount(){
    fetch('http//localhost:3000/les')
    .then(function(response){
      return response.json();
    })
    .then(les => this.setState({les}));
  }

  render() {
    return <h1>Les Component</h1>
    }
  }

  export default Le