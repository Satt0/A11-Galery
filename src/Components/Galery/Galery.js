import React, { useState, useEffect } from "react";
import "./Galery.scss";
// import {Link} from 'react-router-dom';
import SidePanel from "./Contents/SidePanel/SidePanel";
import Show from "./Contents/Show/Show";
import TopPanel from "./Contents/TopPanel/TopPanel";
export default function Galery() {
  const display = [
    { view: "teacher", length: 1 },
    { view: "girl", length: 4 },
    { view: "boy", length: 4 },

    { view: "leader", length: 1 },
  ];

  const [a, seta] = useState(0);
  const onClick = (num) => {
    return async () => {
      await seta(num);
    };
  };
  useEffect(() => {
    const t = setInterval(() => {
      seta((a) => (a + 1) % 4);
    }, 60000);
    return () => {
      clearInterval(t);
    };
  });
  return (
    <div id="galery" className="Galery">
      <SidePanel onClick={onClick} index={a} />
      <Show length={display[a].length} view={display[a].view} />
      <TopPanel onClick={onClick} index={a} />
    </div>
  );
}
// data-aos="fade-in" data-aos-duration="400"
