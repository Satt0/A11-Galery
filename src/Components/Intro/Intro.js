// import React from "react";
// import "./Intro.scss";
// import "aos/dist/aos.css";
// import ScrollIntoView from 'react-scroll-into-view'

// export default function Intro() {


//   const aos = {
//     intro: { data: "fade-out", duration: '400' },
//     hello: { data: "zoom-out", duration: "600" },
//     button: { data: "zoom-in", duration: "1000" },
//   };
//   const navigateButton = () => {
    
  
     
    
//   };
//   return (
//     <div
//       className="Intro"
//       data-aos={aos.intro.data}
//       data-aos-duration={aos.intro.duration}
//     >
//       <div className="Intro-container">
//         <div
//           className="Intro-container-Hello"
//           data-aos={aos.hello.data}
//           data-aos-duration={aos.hello.duration}
//         >
//           {/* <H1/> */}
//           Wellcome to my portfolio!
//         </div>
        

//         <ScrollIntoView selector="#galery">
//  <button
//           className="Intro-container-Button"
          
//           onClick={navigateButton}
         
//         >
//           Go to Galery
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

// </ScrollIntoView>
        
       
       
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './Intro.scss'
import bg_1 from './bg/bg_1.JPG'
// import bg_2 from './bg/bg_2.JPG'
// import bg_3 from './bg/bg_3.JPG'
import bg_4 from './bg/bg_4.JPG'
import bg_5 from './bg/bg_5.JPG'
import ScrollIntoView from 'react-scroll-into-view'
// import Text from './Text'
const slides=[
  {id:0,url:bg_1},
  // {id:1,url:bg_2},
  // {id:2,url:bg_3},
  {id:1,url:bg_4},
  {id:2,url:bg_5}
]

export default function Intro () {
  const [index, set] = useState(0);
  const text=['Wellcome to A11 family 👏',"This is our galery website 👌","Checkout fancy photos about us 👉👈","Hope you like it 👍"]
  const [hello,setHello]=useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => 
  
  {
  
  set(state => (state + 1) % 3)
setHello(state=>(state+1 )% 4)
  
  
  }
  ,4000), [])
  return <div className="Intro-Container" id="intro">
     <div className="Hcontainer">
       <div className="container-text">
          <p>{text[hello]}</p>
       </div>
        

        <ScrollIntoView selector="#galery">
 <button
          className="container-Button"
          
          
         
        >
          Go to Galery
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

</ScrollIntoView>
        

</div>





   { transitions.map(({ item, props, key },index) => (
    <animated.div
      key={key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${item.url}`,backgroundAttachment:'fixed' }}
    >
 


    </animated.div>
  ))
}
  </div>
}
