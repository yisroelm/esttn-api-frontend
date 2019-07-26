import React, { Component } from 'react' 
import ProductForm from '../components/ProductForm';
import { Card, Container } from 'semantic-ui-react'
import ProductCard from '../components/ProductCard';

class ProductsContainer extends Component {

  render() {
  // begin loading*************
  if (this.props.les.length > 0) {

    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.les[0].products.map( p => 
       <ProductCard key={p.id} product={p} />
     )}
     <ProductForm />
    </div>
    </Card.Group>
    </Container>
    )  
    } 
    else {
      return(
      <h4>Loading...</h4>)
    } 
  }
}

export default ProductsContainer
