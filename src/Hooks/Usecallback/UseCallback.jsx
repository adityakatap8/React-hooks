import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

function UseCallback() {

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Rage Against The Machine");

    const returnComment = useCallback(() => {
        return data;
    }, [data])

  return (
    <div className="App">

        <Child returnComment={returnComment} />

        <button 
        onClick={() => {
            setToggle(!toggle);
        }}
        >
            {" "} Toggle
        </button>
        {toggle && <h1>Toggle</h1>}
      
    </div>
  )
}

export default UseCallback

/*
IMP: A function is reacreated every time a state changes

*/
