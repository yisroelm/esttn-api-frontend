import React, { Component } from 'react' 
class Client extends React.Component {


  render() {
    console.log(this.props.les)

    if (this.props.les.length > 0) {

    


    return(
    <div>
     <h1>got client</h1>
     {this.props.les[0].clients.map( c => (
       <p>{c.name}</p>
     ))}
    </div>
    )  
    }  
    else {
      return (
        <h1>not working</h1>
      )
    }
  } 
  }


  export default Client