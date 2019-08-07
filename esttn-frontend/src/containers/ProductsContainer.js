import React, { Component } from 'react' 
import { connect } from 'react-redux'
import ProductForm from '../components/ProductForm';
import { Container } from 'semantic-ui-react'
import ProductCard from '../components/ProductCard';

class ProductsContainer extends Component {
  state = {
    input: ""
  }

  handleChange = (e) => this.setState({input: e.target.value})

  filtering = () => {
    if (this.state.input !== ""){
      return this.props.products.filter(product => {
        return product.name.toLowerCase().includes(this.state.input)
        })
    }else{
      return this.props.products
    }
  }
//controlled input field based on the content of the react state.input
  render() {
    return (
    <Container>
    <div>
    Search <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.input}></input>
     {this.filtering().map( p => 
       <ProductCard key={p.id} product={p} /> // id for react access
     )}
     <ProductForm />
    </div>
    </Container>
    )
  }
}  

const mapStateToProps = state => {
  return {products: state.products}
 }
 
 export default connect(mapStateToProps, null)(ProductsContainer)

