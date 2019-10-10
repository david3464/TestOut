import React from 'react'

const Greet = (props) => {
  const {name, heroName, children} = props;
  // const {state1, state2} = state;
  console.log(props);
  return (
      <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
         {children}
      </div> 
    )
  }



export default Greet;
