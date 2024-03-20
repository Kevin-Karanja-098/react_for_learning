import React, { useState } from "react";
import Name from "./Child";

function AddAge(props){
const [age, setAge] =useState(props.age);

const add = () => {
  setAge(prevAge => prevAge + 1);
};
return (
    <div>
      <h1> The new age is:{age}</h1>
      <button onClick={add}>addCount</button>
    </div>
  )
}

function App(){
   const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  
   return (
    <div>
      <h1>The his eyeColor is:{person.eyeColor}</h1>
      <AddAge age={person.age}/>
      <Name firstName={person.firstNamed}/>
    </div>
   )
}

export  default App