import React from "react";
import "./TopPanel.scss";
export default function TopPanel({onClick,index}) {
  const arr=['Teacher',"Leaders","Boys","Girls"]

  return (
    <div className="TopPanel-Container">
      <ul>
        {arr.map((e,i)=><li key={i*333} onClick={onClick(i)} className={index===i?"lighten":''}><p>{e}</p></li>)}
      </ul>
    </div>
  );
}
