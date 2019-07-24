import React, { Component } from 'react' 
import CreateProductContainer from '../containers/CreateProductContainer';


class Product extends React.Component {

  render() {

    if (this.props.les.length > 0) {

    return(
    <div>
     {this.props.les[0].products.map( p => (
       <p>{p.name}</p>
     ))}

     <CreateProductContainer />
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