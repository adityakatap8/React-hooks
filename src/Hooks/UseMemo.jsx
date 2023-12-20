import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'


function UseMemo() {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data);
        });
    }, []);

    const findLongestName = (comments) => {
        if(!comments ) return null;

        let longestName = "";
        for(let i = 0; i < comments.length; i++){
            let currentName = comments[i].name;
            if( currentName.length > longestName.length){
                longestName = currentName;
            }
        }

        console.log("THIS WAS COMPUTED");

        return longestName;
    };

    const getLongestNames = useMemo(()=> findLongestName(data), [data] )


  return (
    <div className='App'>
      <div>{getLongestNames}</div>

      <button onClick={() => {
        setToggle(!toggle)
      }}> {" "}Toggle </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default UseMemo

/*
here in this example before using useMemo when we try to compute the largest comments from the json
whenever we click the toggle buttonthe computation repeated wheneer we click on the toggle button

here the basic functionality of a useMemo hook is to not repeat complex computations and prevent to update the data whenever other state changes
it does not allow the computations to run mulitple tims making our application faster

in this example we have used a really simple example to understand but in real projects we use for complex computatios

*/