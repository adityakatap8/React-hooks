import React,{ useEffect } from 'react'

function Child({ returnComment }) {

    useEffect(() => {
        console.log("function was called")
    }, [returnComment])

  return (
    <div>
      <h1>{returnComment()}</h1>
    </div>
  )
}

export default Child
