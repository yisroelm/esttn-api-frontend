import React, { Component } from 'react' 
class Client extends React.Component {


  render() {
    console.log(this.props)

    return(
    <div>
     {this.props.client.map((client) => {
       return (<h1>{client.name}</h1>)
     })}
    </div>
    )     
  }
}

  export default Client