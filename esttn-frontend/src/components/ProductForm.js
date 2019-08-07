import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createProduct} from '../actions/LeAction'

class ProductForm extends Component {

    state = {
        input: ""
    }

    handleChange = e => {
        this.setState({
            input: e.target.value //updating state on keystroke
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.props.createP(this.state.input, 1)}> 
                    <input type="text" onChange={this.handleChange} value={this.state.input}></input>
                    <input type="submit" value ="Create Product" />
                </form>
            </div>
        )
    }
}

    const mapDispatchToProps = dispatch => {
        return{
            createP: (productName, le_id) => dispatch (createProduct(productName, le_id))
        }
    }

   export default connect(null, mapDispatchToProps)(ProductForm) //mapDispatchToProps has to be 2nd argument because of arguments
    //connect is a higher order function which is a purefunction (which is consistint) that returns a function