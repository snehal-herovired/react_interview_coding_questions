import React,{useRef,useState} from "react";
import "./style.css";


export default function App() {
  const[name,setName]=useState('')

  // using useref and giving intial value to null 
  let myInput =useRef(null)

  // function to set uncontrolled input field value to state;
  function handleclick(){
    console.log(myInput.current.value)
  let myname= myInput.current.value;
  setName((prevName)=>[...prevName,myname]);
  console.log(name)
   myInput.current.value='';


  }
  return (
    <div>
     <input type="text" ref={myInput}/>
     <div>{name}</div>
     <button onClick={handleclick}>click me</button>

    </div>
  );
}
