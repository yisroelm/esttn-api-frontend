import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createProduct} from '../actions/LeAction'

class ProductForm extends Component {

    state = {
        input: ""
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.props.createProduct(this.state.input, 1)} >
            <input type="text" onChange={this.handleChange} value={this.state.input}></input>
            
            <input type="submit" value ="Create Product" />
           
            
            </form>
            </div>
        )
    }
}

    const mapDispatchToProps = dispatch => {
        return{
            createProduct: (productName, le_id) => dispatch (
                createProduct(productName, le_id)
            )
        }
    }

   export default connect(null, mapDispatchToProps)(ProductForm)
