import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import Placement from './components/Placement';
import About from './components/About';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Navbar/>

      <Routes>
   
        <Route exact path="/" element={<Cover/>} /> 
        <Route exact path='/Placement' element= {<Placement/>}/>
        <Route exact path='/About' element= {<About/>}/>
        <Route exact path='/FAQs' element= {<FAQs/>}/>
        <Route exact path='/Contact' element= {<Contact/>}/>
      </Routes>     
    </Router>
    </>
  );
}

export default App;
