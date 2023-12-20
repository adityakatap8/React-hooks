import React, { useState } from 'react'

function StateTutorial() {

    const [count, setcount] = useState(0);
    const [inputValue , setInputValue] = useState("current")


    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        if (count > 0) { setcount(count - 1) }
    }

    const updateName = () => {
        setName()
    }

   const [name , setName] = useState("");

   const changeName = (e) => { 
    const newName = e.target.value 
    setName(newName) 
}


    return (
        <div>
            <h1>useState</h1>
            {count} 
            <br />
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>decrement</button>

<input type="text" placeholder='enter name' onChange={changeName} />
{name}
        </div>
    )
}

export default StateTutorial

// why the  we need to use the useState hook????
/*
we can write vanilla js to perform the same opration 
where we are creating the increment function and can pass it to the button
it will increment the value but we will not see that inside a react component
if we console the result the value will increasing, then why the FUCK we cannot see it inside the compoent

The reason is WE ARE NOT TELLING REACT TO RE_RENDER ITS COMPONENT WITH UPDATED VALUE
react is stupid  who does not understand the normal approch
it is a component based architecture and it needs to manage the state of its  components 
and this  compares the changes or updates with the virtual dom and actual dom then it will understand that there is some change in the information
 */
