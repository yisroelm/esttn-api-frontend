import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeCard from '../components/LeCard';

class LesContainer extends Component {
              
     render() {
        return (
            <div>
                <LeCard current_le={this.props.les}/>
            </div>  
            )
        }
    }

const mapStateToProps = state => ({les: state.les[0]})

export default connect(mapStateToProps )(LesContainer)