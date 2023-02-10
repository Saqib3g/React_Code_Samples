import "./App.css";
import {useState} from "react";
import { useEffect } from "react";
import Head from "./components/Head";
import useFetch from "./components/useFetch";

function App () {
 const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  return(
    < > 
    <Head />
    {data.map((e,i) => {
      return <h1 key={i}>{e.firstName}</h1>
    })
    }
    </>
  );
}

export default App;
