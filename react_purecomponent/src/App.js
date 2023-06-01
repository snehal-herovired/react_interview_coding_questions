import React,{useState} from "react";
import "./style.css";
import Test from "./components/Test"
import { pure } from 'recompose';


export default function App() {
  const[count,setCount]=useState(0)
  console.log("parent renders")
  let obj;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h3><button onClick={()=>setCount(count+1)}>+</button>{count}</h3>
      <Test  />
    </div>
  );
}
