import React,{useState}from "react";
import "./style.css";
import obj from "./utils/CheckBox.js"
import Main from "./utils/Main.js"
export default function App() {
  let[check,setCheck]=useState([])
  
     function handleclick(e){
           let {id, value} = e.target
           
           if(e.target.checked){
             console.log(id,value)
             setCheck([...check,value])

           }else{
           setCheck(check.filter(ele=>ele!=value))
          }
        }
          console.log(check)
  // console.log(obj)
  return (
    <div>
      {
        obj.map((ele)=>{
          return(
            <>
           <input type="checkbox" id={ele.id} name={ele.category} value={ele.category} onChange={handleclick} />
           <label for={ele.category}>{ele.category}</label><br/> 
            
            </>

          )
        })
      }
      <Main  obj={check}/>
     
    </div>
  );
}
