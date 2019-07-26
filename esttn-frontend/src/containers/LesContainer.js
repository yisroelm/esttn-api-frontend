import React, { Component } from 'react'
import { connect } from 'react-redux'


class LesContainer extends Component {
//     constructor(props) {
        // super(props)

//         this.state = {
//             les: {}
//         }
//     }

    showName = () => {
        if(this.props.les.length > 0) {
            return( 
                <div>
                <h3>{this.props.les[0].name}</h3>
                </div>)
        }

    }
                     
               

    render() {
        return (
            <div>
                {this.showName()}
            </div>  
            )
        }
    }

const mapStateToProps = state => ({les: state.les})

export default connect(mapStateToProps )(LesContainer)