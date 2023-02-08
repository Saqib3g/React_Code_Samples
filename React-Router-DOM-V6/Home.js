
import React, { useState, useEffect } from 'react';
const Home = () => {
    const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const result = await response.json();
      setData(result);
    }
    getData();
  }, [state]);

  useEffect(() => {
    document.title = `(${state}) Employees online`;
  }, [state]);
  return (
    <div>
        <button onDoubleClick={()=>window.alert("You Double Clicked idiot!")} onClick={() => setState(state + 5)}>Click me {state}</button>
        <textarea onPaste={()=> window.alert("Dont copy-paste noobde!")}></textarea>
    
      {
        data.map((element, index) => (
          <div className='data' key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Home
