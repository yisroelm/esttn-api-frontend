import React, { Component } from 'react' 

const Client = (props) => {
  // begin loading*************
  if (props.les.length > 0) {
  
    return (
    
    <div>
     {props.les[0].clients.map( c => (
       <p>{c.name}</p>
     ))}
    </div>
    )  
    } 
    else {
      return(
      <h4>Loading...</h4>)
    } 
  }

  export default Client