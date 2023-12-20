import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {

    const inputRef = useRef(null);
    

    useEffect(() => {

        console.log("UseEffect")
        // sideeffects code

        return() => {
            // clear out function
        }
    }, [ /** depedecy array */ ])

    useLayoutEffect(() => {
        console.log("UseLayouEffect")
    }) 


  return (
    <div>
      <h1>UseLayoutEffect</h1>
    </div>
  )
}

export default UseLayoutEffect

/*
UseLayoutEffect is used to display any operation before the other page content is loaded
it is used to show some UI effects before loading of the entire page
oppoite to useEffect which loads after the loading of certain page

*/