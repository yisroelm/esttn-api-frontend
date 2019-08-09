import React, { Component } from 'react'

  class ClientDateForm extends Component {
      constructor() {
        super();
        this.state = {
          input: "",
          data: ""
        };
      }
    
      handleChange = e => {
        this.setState({
            input: e.target.value //updating state on keystroke
        })
    }
    
      handleSubmit = e => {
        e.preventDefault();
        this.setState({
          input: ""
        })
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Notes:
              <input type="text" id="data" value={this.state.input} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>
        );
      }
    }

    export default ClientDateForm
    