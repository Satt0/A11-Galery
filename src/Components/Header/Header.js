import React, { useEffect, useState } from "react";
import "./Header.scss";
import ScrollIntoView from "react-scroll-into-view";
import music from "./1.mp3";
import music1 from "./2.mp3";
import music2 from "./3.mp3";
import music3 from "./4.mp3";
import svg from "./music.svg";
import svg1 from "./icon.svg";
export default function Header() {
  const ms = [
    { src: music1, name: "Mình cùng nhau đóng băng." },
    { src: music, name: "Sao em tăt máy!" },
    { src: music2, name: "Hom nay toi buon." },
    { src: music3, name: "Vo tinh." },
  ];
  const [toggle, setToggle] = useState(false);
  const [mute, toggleMusic] = useState(true);
  const [list, toggleList] = useState(0);
  useEffect(() => {
    const header = document.getElementById("header");
    let a = null;

    window.addEventListener("scroll", () => {
      if (a !== null) {
        clearTimeout(a);
      }

      header.classList = "nostyle";
      a = setTimeout(() => {
        header.classList = "style";
      }, 200);
    });
  }, []);
  useEffect(() => {
    const id = document.getElementById("music-content");

    id.volume = "0.5";
    if (mute) {
      id.pause();
    } else {
      id.play();
    }
  }, [mute]);
  useEffect(() => {
    const id = document.getElementById("music-content");
    const toggle = () => {
      toggleList((a) => (a + 1) % ms.length);
    };
    id.addEventListener("ended", toggle);
    return () => {
      id.removeEventListener("ended", toggle);
    };
  }, []);
  useEffect(() => {
    const id = document.getElementById("music-content");
    if (!mute) {
      id.play();
    }
  }, [list, mute]);
  return (
    <>
      <header id="header" className={!toggle ? "style" : "nostyle"}>
        <figure id="music-player">
          <audio
          style={{pointerEvents:"none"}}
            id="music-content"
            preload="auto"
            controls
            autoPlay={false}
            // loop={true}
            // muted={mute}
            src={ms[list].src}
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>

        <div className="link-container">
          <ScrollIntoView selector="#galery">
            <li>Intro</li>
          </ScrollIntoView>

          <ScrollIntoView selector="#video">
            <li>Video</li>
          </ScrollIntoView>
          <li
            
          >
            <img


onClick={() => {
  if (mute) {
    toggleMusic((a) => !a);
  } else {
    toggleList((a) => (a + 1) % ms.length);
  }
}}
           
              className={mute ? "img" : "img on"}
              alt="rope"
              src={mute ? svg1 : svg}
            />

            <div  className="song-name" style={mute ? { display: "none" } : {}}>
              <p  className="name">{ms[list].name}</p>
            </div>
          </li>
          <li
            onClick={() => {
              toggleMusic((a) => !a);
            }}
          >
            {mute?`Off 😐`:`On 😃`}
          </li>
        </div>

        {/* <div className={toggle?"dropdown-menu on":"dropdown-menu off"}>
    
    
    </div> */}
      </header>
      <div
        className={!toggle ? "hamburger on" : "hamburger off"}
        onClick={() => {
          setToggle((state) => !state);
        }}
      >
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
    </>
  );
}
