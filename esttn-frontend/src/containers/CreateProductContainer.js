import React, { Component } from 'react'
import Product from '../components/Product';
import { connect } from 'react-redux';
import {createProduct} from '../actions/LeAction'

class CreateProductContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            le_id: this.props.les.id,
            name: ""
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.name !== "") {
            this.props.createProduct(this.state)
            this.setState({
                name: ""
            }) 
            
        }

    }

    render() {
        return (
            <div>
                <h1>form</h1>
                <form onSubmit={this.handleSubmit} >
            <input type="text" onChange={this.handleChange} value={this.state.name}></input>
            
            <input type="submit" value ="Create Product" />
           
            
            </form>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({

//     createProduct: product => dispatch({type: "CREATE_PRODUCT",product})
//    })
    const mapStateToProps = state => ({les: state.les[0]})

   export default connect(mapStateToProps, {createProduct})(CreateProductContainer)
