import React, { Component } from 'react' 


const Appointment = (props) => {
  // begin loading*************
  if (props.les.length > 0) {
  return (
    

    // return(
    <div>
     {props.les[0].appointments.map( a => (
       <p>{a.date}</p>
     ))}
    </div>
    )  
    } 
    else {
      return(
      <h4>Loading...</h4>)
    } 
  }

    // else {
    //   return (
    //     <h1>not working</h1>
    //   )
    // }
  // } 
  // }


  export default Appointment