import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"/>
        <p>This is Children Props</p>
      <Greet />
      <Greet name="Andy" heroName="Superman"/>
      <Greet name="Clavin" heroName="Wonder WOmen"/>
      <Welcome />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
