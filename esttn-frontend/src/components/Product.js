import React, { Component } from 'react'

class Product extends React.Component {
  state = { products: []}

  componentDidMount(){
    fetch('http//localhost:3000/les')
    .then(function(response){
      return response.json();
    })
    .then(products => this.setState({products}));
  }

  render() {
    return <h1>product Component</h1>
    }
  }

  export default Product