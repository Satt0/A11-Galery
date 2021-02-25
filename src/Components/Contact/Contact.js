import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Contact.scss";
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
  const [title,titleOn]=useState(true)
  return (
    <div className="Video-Container p-5 d-flex" id="video">
     <div className="blur-wallpaper"></div>
      <div className="Video-Select p-1 shared-inner" style={{minWidth:300,zIndex:2}}>
      <div className="landscape">
      <h1 className="title">Playing: {data[play].name}</h1>
       
       <h3 onClick={()=>{setPlay((play+1)%data.length)}}>-next: {data[(play+1)%data.length].name}-</h3>
      </div>
        <div className="caption" >
          <div className="container-fluid" style={{maxWidth:768}}>
          <p className="w-100 text-center">A11 Family thân mến!</p>
          <p>Vậy là chúng ta đã xa nhau được {(new Date).getFullYear()-2019} năm rồi. Các bạn vẫn khỏe chứ 🤔 Đây là một website mà mình tạo ra với những kỉ niệm học sinh của chúng ta ngày đó. Hãy cùng xem và tận hưởng nhé! </p>
          <p className="text-center w-100">---End---</p>

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
       
        onEnded={()=>{setPlay(a=>(a+1)%data.length)}}
      />
     </div>
    </div>
  );
}
