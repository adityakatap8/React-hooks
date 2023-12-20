import React, { useReducer } from 'react'



const reducer = (state, action) => {
    switch(action.type){
        case"INCREMENT":
        return { count: state.count + 1, showText: state.showText};
        case"toggleShowText":
        return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}

function UseReducer() {
 const [ state, dispatch ] = useReducer( reducer, { count: 0, showText: true } );


  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({ type:"INCREMENT" })
        // dispatch({ type:"toggleShowText" })
      }}>Click Here</button>
      {state.showText && <p>This is a Text</p>}
    </div>
  )
}

export default UseReducer

/* 
this is a replacement or alternative for useState.
but there is a certain benefit of using useReducer

*/
