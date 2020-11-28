import React from 'react'
import './styles.scss'
import Carousel from './Carousel/Carousel'


export default function Viewpager({length,view}) {

  return <div className="Viewpager">
  
 <Carousel view={view} length={length}/>
  </div>
}
