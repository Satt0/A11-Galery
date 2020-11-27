import React from 'react'
import {useSpring, animated} from 'react-spring'
export default function H1() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        
        config:{duration:1500}
      })
      return <animated.div style={props}>Testing animated text</animated.div>
}
