import React, { useRef, useState } from 'react';

function UseReference() {
  const inputRef = useRef(null);
  const [nameList, setNameList] = useState([]);

  const onClick = () => {
    const newName = inputRef.current.value;

    // Update the state to include the new name
    setNameList(prevNames => [...prevNames, newName]);

    // Clear the input field
    inputRef.current.value = '';
  };

  return (
    <div>
      <h1>Aditya</h1>
      <input type="text" placeholder='Enter name...' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>

      {/* Display the list of names */}
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReference;
