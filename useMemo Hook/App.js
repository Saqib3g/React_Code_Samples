import "./App.css";
import {useState, useEffect, useMemo} from "react";
import Head from "./components/Head";

function App () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expensiveCalculation = (num) => {
    console.log("calculating.......");
    for(let i=0; i<100000000; i++){
    }
    return num;
  };

  const calculation = useMemo(() => 
  expensiveCalculation(count)
  ,[name]);

  return(
    < > 
    <div>
    <Head />
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <h1>Count: {count}</h1>
    <input onChange={(e) => setName(e.target.value)} />
    <h1>Name: {name}</h1>
    </div>
    </>
  );
}

export default App;
