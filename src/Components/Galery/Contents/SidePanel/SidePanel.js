import React from 'react'
import './SidePanel.scss';
import Card from './Card'
import bg_boys from '../../bg-boys.jpg'
import bg_teacher from '../../bg-teacher.jpg'
import bg_girl from '../../bg-girl.JPG'
import bg_leader from '../../bg-leader.JPG'
export default function SidePanel() {
    // const [state,setState]=useState(0);
const list=[{name:'Boys',img:bg_boys},{name:'Girls',img:bg_girl},{name:'Teachers',img:bg_teacher},{name:'Leaders',img:bg_leader}]
    // const onClick=(num)=>()=>{
    //     setState(num);
    // }
   
    return (
        <div className="SidePanel">
           
               {list.map((e,i)=><div key={i} className="Card-container"><Card name={list[i].name} bg={list[i].img||null}/></div>)}
          
        </div>
    )
}
