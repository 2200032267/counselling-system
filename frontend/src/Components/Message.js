import React, { Component } from 'react'

class Message extends Component {
    constructor( ) {
      super( )
    
      this.state = {
         message: 'welcome to visitor'
      }
    }
    changeMessage(){
        this.setState({
            message: 'thanks for subscribing'
        })
    }

  render() {
    return (
      <div>
        <center>
            <h1>
                {this.state.message}
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </h1>
        </center>
      </div>
    )
  }
}

export default Message