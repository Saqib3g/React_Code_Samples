import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About   from './components/About';
import Error from './components/Error';
import Insta from './components/Insta';
import Mail from "./components/Mail";
import UserDetails from './components/UserDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
      
          <Route path="/:userId" element={<UserDetails />} />
           
          <Route path="/about" element={<About />} />
            
          <Route path='/contact' element={<Contact />} >
          <Route path='mail' element={<Mail />}/>
          <Route index element={<Mail />}/>
          <Route path='insta' element={<Insta />}/>
          </Route>
          <Route path='*' element={<Error />} />
        
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
