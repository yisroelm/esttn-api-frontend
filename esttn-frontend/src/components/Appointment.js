import React, { Component } from 'react' 
class Appointment extends React.Component {


  render() {
    console.log(this.props)
        debugger
    return(
    <div>
     {this.props.appointment.map( (appointment) => {
       return (<h1>{appointment.name}</h1>)
     })}
    </div>
    )     
  }
}

  export default Appointment