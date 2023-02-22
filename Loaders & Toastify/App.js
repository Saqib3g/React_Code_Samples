import "./App.css";
import { useEffect, useState } from "react";
import Head from "./components/Head";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App () {
  const [loading,setLoading] = useState(false);
  const [data, setData] =useState([]);

  useEffect(() =>{
    setLoading(true);
   async function getData(){
    const res = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
    const finalRes = await res.json();
    setData(finalRes);
    setLoading(false);
    toast.success("data fetched!");
    
   }
   getData();
   
  },[])

  return(
    < > 
    
       <Head />
       <ToastContainer />
       <div className="main"> 
       {loading ? 
       <TailSpin />
       :

        data.map((e,i) => {
        return (
          <p>{e.email}</p>
        )
       })
       }
       </div>
       
    </>
  );
}

export default App;
