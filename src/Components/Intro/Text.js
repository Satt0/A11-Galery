import React,{useState,useEffect}  from 'react'
import { useTransition, animated } from 'react-spring'
import './Text.scss'

export default function Text() {
    const [toggle, set] = useState(true)
    const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
useEffect(()=>{
    setInterval(()=>{
        set(state=>!state)
    },3000) 
},[])
    return <div class='text-transistion'>

          { transitions.map(({ item, key, props },i) => 
    item
      ? <animated.p key={i} style={props}>Wellcome to A11 family</animated.p>
      : <animated.p key={i} style={props}>Second Line</animated.p>
    )}
    </div>
 
}
