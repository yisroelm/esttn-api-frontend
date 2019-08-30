import React, { Component } from 'react'

  class ClientDateForm extends Component {
      constructor(props) {
        super(props);
        this.state = {
          input: "",
          notes: []
        };
      }
    
    handleChange = e => {
        this.setState({
            input: e.target.value //updating state on keystroke
        })
    }

    addNote = () => {
        this.setState(state => {
            const notes = state.notes.concat(state.input)
            return {
            notes,
            input: "",
            };
        });
    };
    // reset = () => {
    //     this.setState({
    //         input: ""
    //     })
    // }

    render() {
    return (
        <div>
            {this.state.notes.map(note => (
            <h5 key={note}>{note}</h5>
            ))}
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />
        <button
            type="button"
            onClick={this.addNote}
            // disabled={!this.state.input}
        >
            Add Note
        </button>
        </div>
    );
    }
}
    

    export default ClientDateForm
    