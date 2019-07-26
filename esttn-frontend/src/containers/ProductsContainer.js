import React, { Component } from 'react' 
import { connect } from 'react-redux'
import ProductForm from '../components/ProductForm';
import { Card, Container } from 'semantic-ui-react'
import ProductCard from '../components/ProductCard';

class ProductsContainer extends Component {

  render() {
    return (
    <Container>
    <Card.Group itemsPerRow={3}>
    <div>
     {this.props.products.map( p => 
       <ProductCard key={p.id} product={p} /> // id for react access
     )}
     <ProductForm />
    </div>
    </Card.Group>
    </Container>
    )
  }
}  

const mapStateToProps = state => {
  return {products: state.products}
 }
 
 export default connect(mapStateToProps, null)(ProductsContainer)

