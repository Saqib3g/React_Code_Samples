import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About   from './components/About';
import Error from './components/Error';
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
          <Route path="/about" element={<About />} />
            
          <Route path='contact' element={<Contact />} />
           
          <Route path='/' element={<Home />} /> 

          <Route path='*' element={<Error />} />
        
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
