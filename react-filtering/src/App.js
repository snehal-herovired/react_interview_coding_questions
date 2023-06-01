import React, { useState } from 'react';
import './style.css';
import { Product } from './Object.js';
import Nike from './component/Nike';
export default function App() {
  const [showbar, setShowbar] = useState();
  const [showValue, setshowValue] = useState([]);
  const [Array, setArray] = useState(Product);
  const [about,setAbout]=useState('')

  const [link,setLinkNike]=useState('')
  const [linkPuma,setLinkPuma]=useState('')
  const [linkSome,setLinkSome]=useState('')

  // to check fro particular category and open the link to that category

  // console.log(Product, 'asa');

  function handlechange(e) {
    let { value } = e.target;
    // setshowValue(value);
    filter(value);
    linkSearch(value);
    if(value==''){
      setLinkNike('')
      setLinkPuma('')
      setLinkSome('')
      setShowbar(false)
    }
  }
  function linkSearch(str){
    if(str.toLowerCase()=='nike'){
      setLinkNike(str);
    }else if(str.toLowerCase()=='puma'){
      setLinkPuma(str);
    }else if(str.toLowerCase()=='some'){
      setLinkSome(str);
    }
  }

  function filter(str) {
    let filtered = Product.filter((ele) => {
      if (ele.category.toLowerCase().includes(str.toLowerCase())) {
        console.log(ele.category);
        setshowValue(ele.category);
        setShowbar(true)
        return ele.category;
      }else if(ele.about.toLowerCase().includes(str.toLowerCase())){
        console.log(ele.about,ele.category)
        console.log({...about,about:ele.about,category:ele.category})
        setAbout({...about,about:ele.about,category:ele.category})
        

        // checking if category exist and than give them link
        if(ele.category=='nike'){
          setLinkNike(ele.category)
          setShowbar(true)
        }else if(ele.category=='puma'){
          setLinkPuma(ele.category);
        }else if(ele.category=='some'){
          setLinkSome(ele.category);
        }

      }
    });
    setArray(filtered);
  }
 
  return (
    <div>
      <input type="search" onChange={handlechange} />
      {showbar ? <p>{showValue}</p> : <p></p>}
      {
        showbar?<span>
          <span>{about.about}</span>
          <span>{about.category}</span>

        </span>:<p></p>
      }
       {
         showbar?<p>{link}</p>:<></>
       }
       {
         showbar?<p>{linkPuma}</p>:<></>
       }
       {
         showbar?<p>{linkSome}</p>:<></>
       }

      
      {/* <Nike array={Array} /> */}
    </div>
  );
}
