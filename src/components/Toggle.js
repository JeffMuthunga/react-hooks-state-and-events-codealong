import React, {useState} from "react";


function Toggle() {
  const [state, setState] = useState(false)
  function handleClick(){
    setState((state)=> !state)
  }
  const color = state ? "red" : "white"
  return <button 
    style={{background: color}}
    onClick={handleClick}>{state ?"ON": "OFF"}</button>
  
} 




export default Toggle;
