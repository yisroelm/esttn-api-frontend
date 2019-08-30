import React, { Component } from 'react'

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        };
      }

      upvote = () => {
        let upvotedLike = this.state.like +1
          this.setState({
              like: upvotedLike
          })
      }

      downvote = () => {
          let downvoteLike = this.state.like -1
          if(downvoteLike < 0){
              this.setState({
                  like: 0
              })
            } else{
                this.setState({
                    like: downvoteLike
                })
              }
            }

        

      render() {
        return (
            <div>
       <button
            type="button"
            onClick={this.upvote}
            // disabled={!this.state.input}
        >
            like
        </button>
            <br/>
        <button
            type="button"
            onClick={this.downvote}
            // disabled={!this.state.input}
        >
            dislike
        </button>
        {this.state.like}
        
            </div>
        )
    }
}

      export default Like
