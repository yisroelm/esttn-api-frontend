import React, { Component } from 'react' 
class Appointment extends React.Component {


  render() {
    console.log(this.props.les)

    if (this.props.les.length > 0) {

    


    return(
    <div>
     {this.props.les[0].appointments.map( a => (
       <p>{a.date}</p>
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


  export default Appointment