import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import imgList from "./bg/Export";
import rope from './rope.jpg'



export default function Carousel({ length, view }) {
  const img = imgList[view];
  
  const [data, setData] = useState([]);
  const [count,setCount]=useState(Math.floor(Math.random()*img.length));

  useEffect(()=>{
      let a=setInterval(()=>{
        setCount(a=>(a+length)%img.length);
      },6000)

      return ()=>{
        clearInterval(a)
      }
  },[view,length,img])
  useEffect(()=>{
    const list=[];
    for(let i=count;i<count+length;i++)
    {
      list.push(img[i%img.length]);

    }
    setData(list)
    return ()=>{
      setData([])
    }
  },[view,length,img,count])
  useEffect(()=>{
      const list=[];
      for(let i=count;i<count+length;i++)
      {
        list.push(img[i%img.length]);

      }
      setData(list)
  },[count,img,length])




  // useEffect(() => {
  //   setData(first(img, length));
  // }, [view, length, img]);
  // useEffect(() => {
  //   const a = setTimeout(() => {
  //     if (view === "girl"  || view==='leader' || view==='teacher') {
  //       setData((state) => generate(state, img, length));
  //     } else {
  //       setData(first(img, length));
  //     }
  //   }, 5000 - Math.floor(Math.random()*2000));
  //   return () => {
  //     clearTimeout(a);
  //   };
  // }, [length, data, img, view]);
  
  
  
  return (
    <div className="Carousel-Container" id="carousel-id">
      {data.map((e, i) => (
        <div
         
          style={{ boxShadow: `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.6) 0px 30px 90px`}}
          
          
          className="script-bf-box"
        >
          <img className="rope" alt="rope" src={rope}/>
          <img className="rope" alt="rope" src={rope}/>
          <div   key={Math.floor(Math.random()*234234234)} className="content-carousel" style={{
           
            backgroundImage: `url(${e.src})`
           
          }}>


          </div>


        </div>
      ))}
    </div>
  );
}
