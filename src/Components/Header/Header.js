import React,{useEffect,useState} from "react";
import "./Header.scss";
import ScrollIntoView from 'react-scroll-into-view'
import Creator from './Creator.js'

export default function Header() {

const [toggle,setToggle]=useState(false)

useEffect(()=>{
    const header=document.getElementById('header')
    let a=null;
    window.addEventListener('scroll',()=>{
      
        if (a!==null)
        {
          clearTimeout(a)
        }
       
        header.classList="nostyle"
        a=setTimeout(()=>{
          header.classList="style"
          
        },200)
    })
  
},[])

  return (
    <header id="header" className="style">
     

      
      <div className="link-container">
      <ScrollIntoView selector="#intro">
      <p>Wellcome</p>
    </ScrollIntoView>
     
    <ScrollIntoView selector="#galery">
      <p>Members</p>
    </ScrollIntoView>
       
    <ScrollIntoView selector="#video">
      <p>Video</p>
    </ScrollIntoView>

      </div>
    <div className={!toggle?"dropdown on":"dropdown off"} onClick={()=>{setToggle(state=>!state)}}>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
    </div>
    <div className={toggle?"dropdown-menu on":"dropdown-menu off"}>
    {/* <Creator/> */}
    </div>

     
    </header>
  );
}
