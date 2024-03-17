// import React from 'react'
// import { useReducer } from 'react'


// function reducer(state,action){
//  switch(action.type){
//    case 'Increment':
//     return state+=action.payload
//     break;
//   case 'Decrement':
//     return state-=action.payload
//     break;
//   default:
//     return state
//  }
 


// }
// const Counter = () => {
//   let [count,dispatch] = useReducer(reducer,0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{dispatch({type:'Increment',payload:1})}}>increase</button>
//       <button onClick={()=>{dispatch({type:'Decrement',payload:1})}}>decrease</button>

//     </div>
//   )
// }

// export default Counter

import React from 'react'
import { useRef } from 'react'

const Counter = () => {
  let value = useRef()
  console.log(value)
  return (
    <div>
       <h1 id='heading' ref={value}>hello</h1>
    <button onClick={()=>{
      value.current.innerText = 'Hii'
      value.current.style.color = 'red'
    }}>change</button>
    </div>
   
  )
}

export default Counter