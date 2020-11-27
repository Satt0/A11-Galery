import React,{useEffect} from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
// import { Route, Switch } from "react-router-dom";
import Intro from './Components/Intro/Intro'
import Galery from './Components/Galery/Galery.js';
import Contact from './Components/Contact/Contact'
import AOS from 'aos'
export default function App() {
  useEffect(()=>{
    AOS.init({once:true})
    return (()=>{
      AOS.refresh()
    })
  })
  return (
    <div className="App">
      <Header />
      
       <Intro/>
        <Galery/>
        
        <Contact/>
       
      
    </div>
  );
}
