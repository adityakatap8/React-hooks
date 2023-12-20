import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
    

    const [ data, setData ] = useState("");
    const [ count, setCount ] = useState(0)

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email);
            console.log("API was called");
        });
    }, [count])

    return(
        <div>
            <h1>Users email: {data}</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount( count + 1 )}>Click</button>
        </div>
    )
}

export default UseEffect;

// how i understood the useEffect hook
/*
// useEffect is used to handle side effects in functional components.
useEffect(() => {
    // Side effect code goes here, e.g., data fetching, subscriptions, etc.

    return () => {
        // Cleanup code goes here (optional)
    };
}, [dependency array ]);

Purpose of useEffect:

The primary purpose of useEffect is to handle side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, or anything that involves interactions with the outside world.
Rendering and Dependencies:

The useEffect function runs after the component renders and performs the side effect specified in its body.
The dependency array ([] in your example) contains variables that the effect depends on. If any of these dependencies change between renders, the effect will run again.
Cleanup Function:

The optional cleanup function inside useEffect is used to clean up resources or perform actions when the component is unmounted or when the dependencies change (before the next effect run). It's essential for preventing memory leaks or unexpected behavior.

*/