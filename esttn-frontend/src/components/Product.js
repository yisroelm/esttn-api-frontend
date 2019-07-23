import React, { Component } from 'react' 
class Product extends React.Component {

  render() {

    if (this.props.les.length > 0) {

    return(
    <div>
     {this.props.les[0].products.map( p => (
       <p>{p.name}</p>
     ))}
    </div>
    )  
    }  
    else {
      return (
        <h1>not working</h1>
      )
    }
  } 
  }


  export default Product