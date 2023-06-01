import React from "react";
import "./style.css";

export default function App() {
  let a = [101,1020,10300,10400]
  let result =[]
  a.map((ele,i)=>{
    let str =ele+"";
    str =str.replace(/0/gi,'');
     console.log(str)
     result.push(parseInt(str))

   })
   console.log(result)
  
  return (
    <div>
      {
        a.map((ele,i)=>{
          let str =ele+"";
          str =str.replace(/0/gi,'');
           console.log(str)
           return(<ul key={i}>
                  <li>{str}</li>
           </ul>)

         })
      }

    </div>
  );
}
