import React from 'react';
import { pure } from 'recompose';

function Test(props) {
  console.log('child renders');
  
  
  return (
        <h1>hii</h1>
  );
}

export default pure(Test);
