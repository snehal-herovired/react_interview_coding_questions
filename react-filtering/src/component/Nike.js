import React from 'react';

export default function Nike({ array }) {
  return (
    <div>
      {array.map((ele) => (
        <div key={ele.id}>{ele.category}</div>
      ))}
    </div>
  );
}
