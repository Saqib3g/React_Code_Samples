import "./App.css";
import { useState,createContext} from "react";
import Head from "./components/Head";
import ComA from "./components/ComA";
const AppState = createContext();
const App = () => {
  
    const [data, setData] = useState("iPhone 12");
    const [info, setInfo] = useState({name: 'saqib', age:20});

  return (
    < > 
    <AppState.Provider value={{data, info}}>
    <Head />
    <ComA />
    </AppState.Provider>
    </>
  );
}

export default App;
export {AppState}
