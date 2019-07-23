import React, { Component } from 'react' 
class Client extends React.Component {


  render() {
    console.log(this.props)
    if (this.props.clients) {
    return(
    <div>
     {this.props.clients.map( (client) => {
       return (<h4>{client.name}</h4>)
     })}
    </div>
    )     
  }
}
}

  export default Client