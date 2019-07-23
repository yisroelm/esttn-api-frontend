import React, { Component } from 'react' 
class Product extends React.Component {


  render() {
    console.log(this.props)

    return(
    <div>
     {this.props.products.map( (product) => {
       return (<h4>{product.name}</h4>)
     })}
    </div>
    )     
  }
}

  export default Product