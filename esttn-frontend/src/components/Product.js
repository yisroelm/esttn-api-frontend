import React, { Component } from 'react' 
import CreateProductContainer from '../containers/CreateProductContainer';

  const Product = (props) => {
    // begin loading*************
    if (props.les.length > 0) {
    return (
      
  
      // return(
      <div>
       {props.les[0].products.map( p => (
         <p>{p.name}</p>
       ))}

       <CreateProductContainer />
      </div>
      )  
      } 
      else {
        return(
        <h4>Loading...</h4>)
      } 
    }
  
      // else {
      //   return (
      //     <h1>not working</h1>
      //   )
      // }
    // } 
    // }
  
  
    export default Product