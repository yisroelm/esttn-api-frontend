import React, { Component } from 'react' 
class Product extends React.Component {


  render() {
    console.log(this.props)

    return(
    <div>
     {this.props.product.map((product) => {
       return (<h4>{product.name}</h4>)
     })}
    </div>
    )     
  }
}

  export default Product