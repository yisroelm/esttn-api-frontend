import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createProduct} from '../actions/LeAction'

class ProductForm extends Component {

    state = {
        input: ""
    }

    handleChange = e => {
        this.setState({ // setState is async and can take an object or a function
            input: e.target.value //updating state on keystroke
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createP(this.state.input, 1)
        this.setState({ // resets to blank form
            input: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}> 
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