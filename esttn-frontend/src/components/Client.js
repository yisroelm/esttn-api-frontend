import React, { Component } from 'react' 
class Client extends React.Component {


  render() {
    console.log(this.props)

    return(
    <div>
     {this.props.client.map((client) => {
       return (<h4>{client.name}</h4>)
     })}
    </div>
    )     
  }
}

  export default Client