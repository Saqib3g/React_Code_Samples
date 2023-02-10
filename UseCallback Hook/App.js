import "./App.css";
import {useState, useCallback} from "react";
import Head from "./components/Head";
import Todos from "./components/Todos";


function App () {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c+1);
  };

    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    },[todos]);
  return(
    < > 
    
    <Head />
    <div>
    Count: {count}
    <button onClick={increment}>+</button>
    </div>
    <hr />
    <Todos todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
