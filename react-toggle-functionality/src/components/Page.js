import React,{useState}from "react";

export default function Page(){
  const[name,setName]=useState(false)
  function handlename(){
    setName((prevName)=>!prevName);
  }
  return(
    <div>
      <div>{name?'snehal':'Mani'}</div>
      <button onClick={handlename}>click here to toggle names</button>

    </div>
  )
}