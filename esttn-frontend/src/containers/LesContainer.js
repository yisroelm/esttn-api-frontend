import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLes } from '../actions/LeAction'
import Client from '../components/Client';
import Appointment from '../components/Appointment';
import Product from '../components/Product';
import { Container, Button } from 'semantic-ui-react'


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

    showComponents(){
        if(this.props.les) {
            return(
                <div>          
                <h3>{this.props.les.name}</h3> 
                {/* <Client clients={this.props.les.clients} /> */}
                <Appointment appointments={this.props.les.appointments} />
                <Product products={this.props.les.products} />
                </div>
     )
        }
    } 

    showClients() {
        if (this.props.les.clients) {
        return(
        <div>
            <Client clients={this.props.les.clients} />
        </div>
        )
        }
    }


    render() {
        console.log(this.props)
        return (
           
                   <div>
                
                {this.showClients}
                <ul>
                    
                 <li>{this.showComponents()}</li>
                </ul>
            </div>
         
        )
    }
}

const mapStateToProps = state => ({les: state.les})

export default connect(mapStateToProps, {fetchLes })(LesContainer)
