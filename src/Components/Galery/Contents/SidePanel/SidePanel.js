import React from 'react'
import './SidePanel.scss';
import Card from './Card'
import bg_boys from '../../bg-boys.jpg'
import bg_teacher from '../../bg-teacher.jpg'
import bg_girl from '../../bg-girl.JPG'
import bg_leader from '../../bg-leader.JPG'
export default function SidePanel({onClick,index}) {
 
const list=[{name:'Teachers',img:bg_teacher},{name:'Girls',img:bg_girl},{name:'Boys',img:bg_boys},{name:'Moments',img:bg_leader}]
  
   
    return (
        <div className="SidePanel">
           
               {list.map((e,i)=><div key={i} onClick={onClick(i)} className={index===i?"Card-container selected":"Card-container"}><Card zoom={index===i} mul={i+1} name={list[i].name} bg={list[i].img||null}/></div>)}
                
        </div>
    )
}
