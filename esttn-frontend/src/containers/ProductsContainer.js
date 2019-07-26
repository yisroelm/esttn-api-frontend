import React from 'react' 
import ProductForm from '../components/ProductForm';
import { Card, Container } from 'semantic-ui-react'
import AppointmentCard from '../components/AppointmentCard';


  const Product = (props) => {
    // begin loading*************
    if (props.les.length > 0) {
    console.log(props.les)
      return (

      <div>
       {props.les[0].products.map( p => (
         <p>{p.name}</p>
       ))}

       <ProductForm />
      </div>
      )  
      } 
      else {
        return(
        <h4>Loading...</h4>)
      } 
    }

    export default Product