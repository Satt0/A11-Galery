import React,{useState} from 'react'
import './Galery.scss';
// import {Link} from 'react-router-dom';
import 'aos/dist/aos.css';
import SidePanel from './Contents/SidePanel/SidePanel';
import Show from './Contents/Show/Show';
export default function Galery() {
    const [a,seta]=useState(1);
    const onclick=(num)=>{
       
        seta(num);
    }
  

    return (
        <div id="galery" className="Galery">
           
            <SidePanel onclick={onclick}/>
            <Show index={a-1}/>
            
        </div>
    )
}
// data-aos="fade-in" data-aos-duration="400"