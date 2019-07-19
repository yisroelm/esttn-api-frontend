import React, { Component } from 'react'

export class ClientIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/les")
        .then(res => res.json())
        .then(clients => this.setState({clients})) 
  } 
    render() {
        return (
            <ul>
                {this.state.clients.map(client => <li>{client.name}</li>)}
            </ul>
        )
    }
}

export default ClientIndex
