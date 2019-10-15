import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  render() {
      //1. Variable Element Method
      // let message;
      // if(this.state.isLoggedIn) {
      //   message = <div>Welcome David</div>
      // } else {
      //   message = <div>Welcome Guest</div>
      // }
      // return <div><h2>{message}</h2></div>

      //Ture & Flase Evaluation
      // return (
      //   this.state.isLoggedIn ? 
      //   <div>Welcome David</div> : 
      //   <div>Welcome Guest</div>
      // )
      return this.state.isLoggedIn && <div>Welcome David</div>
      
      // 3. Condition Method
      // if(this.state.isLoggedIn){
      //   return (
      //     <div>
      //       <h1>Welcome Viewer!</h1>
      //     </div>
      //   )
      // } else {
      //   return (
      //     <div>
      //       <h1>Welcome Guest</h1>
      //     </div>
      //   )
      // }
  }
}

export default UserGreeting

