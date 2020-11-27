import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Card.scss'



export default function Card({name,bg,mul}) {


  const calc = (x, y) => [-(y - window.innerHeight / (1+(8-1.9*mul))) / 25, (x - window.innerWidth / 8) / 18, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="Card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) ,backgroundImage:`url(${bg})`}}
     
    ><p>{name}</p></animated.div>
  )
}
