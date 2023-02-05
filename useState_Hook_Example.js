// useState" ek hook hai jo React.js ke components me state management ko asaan banaata hai. 
// State ek component ke andar ke changing data hai
// jise component re-render karne ke liye use kiya jaata hai.

import React, { useState } from 'react';

function Example() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// In this example, useState is called with an initial value of 0, which sets the initial 
// state for the component to be 0. The returned value from useState is a pair of values - count 
// and setCount. count is the current value of the state, and setCount is a function that can 
// be used to update the state. The button in this example, when clicked, calls setCount with an
// updated value of count + 1.
