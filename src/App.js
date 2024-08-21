import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
//darkmode
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null); 


const ShowAlert=(message, type)=>{
  setAlert({
    message : message,
    type : type
  })
  setTimeout(()=>{
    setAlert(null);
  },1600);
}



const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#0d1b2a'; // Change background color for dark mode
    document.body.style.color = 'white'; // Light text color
    ShowAlert("Darkmode enabled","success")
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white'; // Change background color for light mode
    document.body.style.color = 'black'; // Dark text color
    ShowAlert("Darkmode disabled","success")
  }

};
  return(
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={<TextForm heading="Enter Text To Analyze" showAlert={ShowAlert} mode={mode}/>}></Route>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
