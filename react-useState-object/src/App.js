import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  // let arr=[1,2,3,4]
  // let ob={
  //   name:"",
  //   email:''
  // }
  // console.log({...ob})


  function handle(e) {
    let{name}=e.target;

    if(name=='name'){
      setForm({
        ...form,
        name: e.target.value,
      })
   console.log(form)        

    }else if(name=='email'){
      setForm({
        ...form,
        email: e.target.value,
      })

    }else if(name=='address'){
      setForm({
        ...form,
        address: e.target.value,
      })
    }
    
  }
 
  function handleClick(){
     data.name=form.name;
     data.email=form.email;
     data.address=form.address;
     console.log(data)
    //  dispatch(action_name(data))
    }
 
  
  
  return (
    <div>
      <input type="text" placeholder="name" name='name' onChange={handle}/><br/>
      <input type="text" placeholder="email" name='email' onChange={handle}/><br/>
      <input type="text" placeholder="address" name='address' onChange={handle}/><br/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
