import "./App.css";
import { useReducer } from "react";
import Head from "./components/Head";

const reducer = (state, action) => {
console.log("state: ", state)
console.log("action: ", action)
if(action.type == "INC"){
  return state + 2;
}
else if(action.type == "DEC"){
  return state - 2;
}
else if(action.type == "MUL"){
  return state * 2;
}
return state;
}
function App () {
  const [state,dispatch] = useReducer(reducer, 0);
  
  return (
    < > 
    <Head />
    <h1>{state}</h1>
    <button onClick={() => dispatch({type: "INC"})}>Increment</button>
    <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    <button onClick={() => dispatch({type: "MUL"})}>Multiply</button>
    </>
  );
}

export default App;
