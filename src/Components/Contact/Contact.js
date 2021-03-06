import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Contact.scss";
import wishes from './wishes'
export default function Video() {
  const data = [
    {
      name: "Kỉ hiếu (2019)",
      url: "https://youtu.be/Vj9RyMifCAE",
    },
    {
      name: "Memories (2018)",
      url: "https://youtu.be/lhsIzX1p_Bs",
    },
    {
        name:'20/11 (2018)',
        url:'https://youtu.be/nTAOuwwOJuk'
    }
  ];
  const [play, setPlay] = useState(0);
  const [wish,setWish]=useState(0)
  const [bg, toggleBg] = useState(false);
  return (
    <div className={`Video-Container p-5 d-flex`} id="video">
     <div className={`blur-wallpaper ${bg?"bg-black":"bg-img"}`}></div>
      <div className="Video-Select p-1 shared-inner" style={{minWidth:300,zIndex:2}}>
      <div className="landscape">
      <h1 className="title">Playing: {data[play].name}</h1>
       
       <h3 onClick={()=>{setPlay((play+1)%data.length);toggleBg(false)}}>-next: {data[(play+1)%data.length].name}-</h3>
      </div>
        <div className="caption" onClick={()=>{
          setWish(i=>(i+1)%wishes.length)
        }}>
          <div className="container-fluid" style={{maxWidth:768}}>
         
         <Wish name={wishes[wish].name} wishes={wishes[wish].wishes} />

          </div>
        </div>
      </div>
     <div className=" shared-inner container-fluid p-3 d-flex h-100 flex-column justify-content-center align-items-center" style={{zIndex:2}}>
     <div className="portrait p-0 m-0">
      <h1 className="title">Playing: {data[play].name}</h1>
       <h3 onClick={()=>{setPlay((play+1)%data.length)}}>next: {data[(play+1)%data.length].name}</h3>
      </div>
     <ReactPlayer
        url={data[play].url}
        autoPlay
        controls={true}
        width="100%"
        height="100%"
        onPause={()=>{toggleBg(false)}}
        onPlay={()=>{toggleBg(true)}}
        onEnded={()=>{setPlay(a=>(a+1)%data.length);toggleBg(false)}}
      />
     </div>
    </div>
  );
}
const Wish=({name,wishes,change})=>(<div className="position-relative pb-3" >
      {wishes.map(e=><p>{e}</p>)}
      <p className="text-right w-100">---from {name}---</p>
</div>)