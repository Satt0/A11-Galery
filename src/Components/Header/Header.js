import React,{useEffect,useState} from "react";
import "./Header.scss";
import ScrollIntoView from 'react-scroll-into-view'
import music from './1.mp3'
export default function Header() {

const [toggle,setToggle]=useState(false)
const [mute,toggleMusic]=useState(true)
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
useEffect(()=>{
  const id=document.getElementById('music-content')
  id.volume="0.5"
 if(mute){
   id.pause()
 }
 else{
   id.play()
 }
},[mute])

  return <>
    <header id="header" className={!toggle?'style':'nostyle'}>
    <figure id="music-player">
    
    <audio
          id="music-content"
          preload="auto"
        controls
        autoPlay={true}
        loop={true}
        // muted={mute}
        src={music}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

      
      <div className="link-container">
      {/* <ScrollIntoView selector="#intro">
      <p>Wellcome</p>
    </ScrollIntoView> */}
     
    <ScrollIntoView selector="#galery">
      <p>Members</p>
    </ScrollIntoView>
       
    <ScrollIntoView selector="#video">
      <p>Video</p>
    </ScrollIntoView>
<p onClick={()=>{toggleMusic(a=>!a)}}>Music:{!mute?"on":"off"}</p>
      </div>
    
    {/* <div className={toggle?"dropdown-menu on":"dropdown-menu off"}>
    
    
    </div> */}

     
    </header>
    <div className={!toggle?"hamburger on":"hamburger off"} onClick={()=>{setToggle(state=>!state)}}>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
    </div>
  </>
}
