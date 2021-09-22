import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
  }
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#155d6b';
      showAlert("Dark mode has been enabled.", "success");
      //document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled.", "success");
      document.body.style.backgroundColor = 'white';
      //document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert> 
      <div className="container my-3">
          {/*
            users ----> Component 1
            users/home---->----> Component 2
          */}
          <Switch>
              <Route exact path="/about">
                  <About mode={mode}/> 
              </Route>
              <Route exact path="/">
                  <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
              </Route>
          </Switch>
      
            {/*<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}
      </div>
      </Router>  
    </>
  );
}

export default App;
