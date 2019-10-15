import React, {Component} from 'react';
import './App.css';
// import Greet from './Component/Greet';
// import Welcome from './Component/Welcome';
// import Hello from './Component/Hello';
// import Message from './Component/Message';
// import Counter from './Component/Counter';
// import FunctionClick from './Component/FunctionClick';
// import ClassClick from './Component/ClassClick';
// import EventBlind from './Component/EventBlind';
import ParentComponent from './Component/ParentComponent';
// import UserGreeting from './Component/UserGreeting';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Hello /> */}
        {/* <Welcome /> */}
        {/* <Greet /> */}
        {/* <Greet name="Bruce" heroName="Batman"> 
          <p>This is Children Props</p>
        </Greet> */}
        {/* <Greet name="Andy" heroName="Superman"/>
        <Greet name="Clavin" heroName="Wonder Women"/>  */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <FunctionClick />*/}
        {/* <ClassClick /> */}
        {/* <EventBlind /> */}
        <ParentComponent />
        {/* <UserGreeting /> */}
      </div>
    );
  }
}

export default App;
