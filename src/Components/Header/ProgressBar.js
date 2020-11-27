import React,{useEffect} from 'react';
import './ProgressBar.scss'

export default function ProgressBar({id}) {
  useEffect(()=>{
    window.onscroll = function() {myFunction()};

function myFunction() {
  if(window.location.pathname===id){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById(id).style.width = scrolled + "%";
  }
  else{
    document.getElementById(id).style.width='0%'
  }
 
}
  })
    return (
        
    <div class="bar" id={id}></div>
  
    )
}
