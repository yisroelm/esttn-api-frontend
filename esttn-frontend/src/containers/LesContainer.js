import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLes } from '../actions/LeAction'
import Client from '../components/Client';
import Appointment from '../components/Appointment';
import Product from '../components/Product';


 class LesContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            les: {}
        }
    }

    componentDidMount() {
      this.props.fetchLes()
  } 

    showClients(){
        if(this.props.les) {
            return(
                <div>          
                <h3>{this.props.les.name}</h3> 
                <Client client={this.props.les.clients} />
                </div>
     )
        }
    } 


    render() {
        console.log(this.props)
        return (
            <div>
                
                
                <ul>
                 <li>{this.showClients()}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({les: state.les})

export default connect(mapStateToProps, {fetchLes })(LesContainer)
