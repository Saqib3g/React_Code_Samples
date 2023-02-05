/* useEffect" ek hook hai jo React.js ke components me side effects (jaise ki API calls, subscriptions, aur DOM updates) 
ko handle karne ke liye use hota hai. */


// useEffect ko import karke apne component me use kiya jaata hai.
import React, { useState, useEffect } from 'react';


function Example() {
  const [count, setCount] = useState(0);
  
// useEffect ko apne component ke functional body me call kiya jaata hai aur usme side effect handling code likha jaata hai.
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
// Second argument useEffect ke function me deni hoti hai jo dependencies hoti hai. Ye dependencies useEffect ko batate hain 
// ki kab useEffect function ko re-run karna hai. Agar dependencies me koi changes hote hain, to useEffect function re-run hota hai.
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Example;
