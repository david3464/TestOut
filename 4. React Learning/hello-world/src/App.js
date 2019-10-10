import React, {Component} from 'react';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
// import Message from './Component/Message';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet />
        {/* <Message /> */}
        <Greet name="Bruce" heroName="Batman">
          <p>This is Children Props</p>
        </Greet>
        <Greet name="Andy" heroName="Superman"/>
        <Greet name="Clavin" heroName="Wonder Women"/>
        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
