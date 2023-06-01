import React,{useState} from "react";
import object from "./Object.js"

export default function Main({obj}){
  let [product,setProduct]=useState(object)
  let [input,setInput] = useState('')

  // console.log(object)
console.log("this is from main ",obj)
  function handleChange(e){
    let {value}=e.target;
     setInput(value)

  }

   let filteredata = product.filter((ele)=>{
     if(obj.length !== 0){
      return obj.includes(ele.category)
     }else if(ele.category.includes(input)){
       return ele
     }else if(ele.type.includes(input)){
        return ele
     }
   })
   
 
  
   

  return(
    <>
    <input type="text" onChange={handleChange}/>
      {
       filteredata.map((ele)=>{
          return (
            <div key={ele.id}>{ele.category}</div>
          )
        })
      }
    </>
  )
}