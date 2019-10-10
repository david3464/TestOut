import React from 'react'

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello World !!! </h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    {id: 'hello'},
    React.createElement('h1', null,'Hello World!'))
}

export default Hello;
