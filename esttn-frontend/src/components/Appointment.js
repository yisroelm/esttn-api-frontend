import React, { Component } from 'react' 
class Appointment extends React.Component {


  render() {
    console.log(this.props)

    return(
    <div>
     {this.props.appointment.map((appointment) => {
       return (<h1>{appointment.date}</h1>)
     })}
    </div>
    )     
  }
}

  export default Appointment