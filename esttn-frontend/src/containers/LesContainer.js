import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLe } from '../actions/LeAction'
import Client from '../components/Client';


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

    // showClients(){
    //     debugger
    //     if(this.state.les[0].clients.length > 0) {
    //         return(<Client client={this.state.les[0].clients} />)
    //     }
    // } 


    render() {
        console.log(this.state)
        return (
            <div>
                {/* {this.showClients()} */}
                
                <ul>
                    <li>{this.state.les.name}</li>
                </ul>
            </div>
        )
        debugger
    }
}

const mapStateToProps = state => ({les: state.les})

export default connect(mapStateToProps, {fetchLes })(LesContainer)
