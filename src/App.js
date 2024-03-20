import React, { useState } from "react";
import Name from "./Child";

function AddAge(props){


return (
    <div>
      <h1> The new age is:{props.age}</h1>
    </div>
  )
}

function App(){

  const [name, setName]=useState('Kevin');
  const handleChange = (event) => {
      setName(event.target.value);
      };
  
  const [age, setAge] = useState(50);
  const add = () => {
    setAge(prevAge => prevAge + 1);
      };
  
  return (
      <div>
        <h1>The his eyeColor is Blue</h1>
        <AddAge age={age}/>
        <button onClick={add}>addCount</button>
        <Name name={name}/>
        <label htmlFor="search">Give the name: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
    )
  }

export  default App