import React,{useState} from "react";

function App(){
  const counter= () =>{
    const [counter, setCounter] = useState(0);

    const addCount = ()=>{
      setCounter(counter + 1);
    };

    const subtractCount =()=>{
      setCounter(counter-1);
    };
  };
  return (
    <div>
      <h1> The add and reduce buttons</h1>
      <button onClick={addCount}>addCount</button>
      <button onClick={subtractCount}>subtractCount</button>
    </div>
  )
}

export  default App