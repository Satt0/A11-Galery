import React from 'react'
import './Show.scss';
// import Data from './Slide'
import Viewpager from '../Viewpager/Viewpager'
export default function Show() {

    
 
    return (
        <div className="Show">
       {/* <div className="Show-Content">
        <img src={content.imgUrl[0]}/>
       </div> */}
           
       <Viewpager/>
        </div>
    )
}
