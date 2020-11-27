import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
// import { Route, Switch } from "react-router-dom";
import Intro from './Components/Intro/Intro'
import Galery from './Components/Galery/Galery.js';
import Contact from './Components/Contact/Contact'
export default function App() {

  return (
    <div className="App">
      <Header />
      
       <Intro/>
        <Galery/>
        
        <Contact/>
       
      
    </div>
  );
}
