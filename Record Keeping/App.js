import Header from './components/Header';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
   setForm(form);
  }
  const removeItem = (index) => {
  let arr = data;
  arr.splice(index, 1);
  setData([...arr]);

  }
  return (
    <div className="App">
<Header />
{/* Form */}
<div className='form'>
<Stack spacing={2} direction="row">
<TextField value={form.name} onChange={(event) => setForm({...form, name: event.target.value})} id="outlined-basic" label="name" variant="outlined" />
<TextField value={form.email} onChange={(event) => setForm({...form, email: event.target.value})} id="outlined-basic" label="email" variant="outlined" />
<Button color='success' variant="contained" onClick={addData}><AddIcon /></Button>
</Stack>
</div>
{/* Data */}
<div className='data'>
  {
    data.map((element, index) => {
      return (
        <div  key={index} className='showdata'>
    <h4>{element.name}</h4>
    <h4>{element.email}</h4>
    <Stack>
    <Button onClick={() => removeItem(index)} variant="outlined" color="error">
        <DeleteOutlineIcon />
      </Button>
      </Stack>
  </div>      )
    })
  }
</div>
    </div>
  );
}

export default App;
