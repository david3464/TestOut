import React from 'react'

function ChildrenComponent (props) {
  return (
    <div>
      <button onClick={(props.greetHandler)}>Greet Parent</button>
    </div>
  )
}


export default ChildrenComponent;
