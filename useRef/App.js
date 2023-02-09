import "./App.css";
import { useState,useEffect,useRef} from "react";
import Head from "./components/Head";

const App = () => {
  const [input, setInput] = useState("");
  const prevState = useRef("");
  useEffect(() => {
    prevState.current = input; 
  },[input])
  const formHandler =(e) => {
    setInput(e.target.value);
  }
  return (
    < > 
    <Head />
    <input value={input} onChange={formHandler} />
    <h4>Prev state was {prevState.current}</h4>
    </>
  );
}

export default App;
