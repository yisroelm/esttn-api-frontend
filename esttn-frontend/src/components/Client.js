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
    else {
      return(<h1>No clinets found</h1>)
    }
  }
}


  export default Client