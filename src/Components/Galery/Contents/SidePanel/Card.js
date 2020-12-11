import React from 'react'
import './Card.scss'


export default function Card({name,bg,zoom}) {



  return (
    <div
      class={zoom?"Card zoom":"Card"}
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ backgroundImage:`url(${bg})`}}
    > 
    <p>{name}</p></div>
  )
}
