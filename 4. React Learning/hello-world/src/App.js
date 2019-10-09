import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Children Props</p>
      </Greet> */}
      {/* <Greet name="Andy" heroName="Superman"/> */}
      {/* <Greet name="Clavin" heroName="Wonder Women"/> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
