import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Card.scss'

const calc = (x, y) => [-(y - window.innerHeight / 5) / 25, (x - window.innerWidth / 8) / 25, 1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card({name,bg}) {
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
