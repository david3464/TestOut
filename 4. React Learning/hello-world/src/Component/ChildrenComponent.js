import React from 'react'

function ChildrenComponent (props) {
  return (
    <div>
      <button onClick={() => props.greetHandle('child')}>Greet Parent</button>
    </div>
  )
}


export default ChildrenComponent;
