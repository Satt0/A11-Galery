import React,{useState} from 'react'
import './Galery.scss';
// import {Link} from 'react-router-dom';
import SidePanel from './Contents/SidePanel/SidePanel';
import Show from './Contents/Show/Show';
import TopPanel from './Contents/TopPanel/TopPanel'
export default function Galery() {

    const display=[
        {view:'teacher',length:3},
        {view:'leader',length:3},
        {view:'boy',length:4},
        {view:'girl',length:4}
    ]




    const [a, seta] = useState(0);
    const onClick=(num)=>{
        return async ()=>{
           
            await seta(num)
        }
    }
    return (
        <div id="galery" className="Galery" >
          
            <SidePanel onClick={onClick}/>
            <Show length={display[a].length} view={display[a].view}/>
            <TopPanel/>
            
        </div>
    )
}
// data-aos="fade-in" data-aos-duration="400"