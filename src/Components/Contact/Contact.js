import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Contact.scss";
export default function Video() {
  const data = [
    {
      name: "Kỉ hiếu",
      url: "https://youtu.be/Vj9RyMifCAE",
    },
    {
      name: "Memories",
      url: "https://youtu.be/lhsIzX1p_Bs",
    },
    {
        name:'Múa chợ tình',
        url:'https://youtu.be/nTAOuwwOJuk'
    }
  ];
  const [play, setPlay] = useState(0);

  return (
    <div className="Video-Container" id="video">
      <h1>Theatre time!</h1>
      <div className="Video-Select">
        <ul>
          {data.map((e, i) => {
           return <li key={i*9232} onClick={()=>{setPlay(i);return}} className={play===i?'playing':''}>{e.name}</li>;
          })}
        </ul>
      </div>
      <ReactPlayer
        url={data[play].url}
          
        controls={true}
        width="60vw"
        min-width="400px"
        height="60vh"
        max-height="500px"
        
        onEnded={()=>{setPlay(a=>(a+1)%data.length)}}
      />
    </div>
  );
}
