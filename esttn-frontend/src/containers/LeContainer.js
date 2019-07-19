import React, { Component } from 'react'

export class LeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            les: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/les")
        .then(res => res.json())
        .then(les => this.setState({les})) 
  } 
    render() {
        return (
            <ul>
                {this.state.les.map(le => <li>{le.name}</li>)}
            </ul>
        )
        debugger
    }
}

export default LeContainer
