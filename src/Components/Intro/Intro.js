import React, { useEffect } from "react";
import "./Intro.scss";
import video from "./rain.mp4";
import ScrollIntoView from "react-scroll-into-view";

export default function Intro() {
  useEffect(() => {
    const video = document.getElementById("myVideo");
    video.playbackRate = 0.8;
  });

  return (
    <div className="Intro-Container" id="intro">
      <figure className="video-container">
        <video
          autoPlay
          playbackRate="0.3"
          muted
          loop
          id="myVideo"
          src={video}
          type="video/mp4"
        />
      </figure>
      <div className="test-overlay">
        <div className="Hcontainer">
          <div className="container-text">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="pattern"
                  width="1"
                  height="3"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <rect x="0" y="0" width="1" height=".8" fill="#ffffff" />
                </pattern>

                <text
                  id="text"
                  x="50%"
                  y="50%"
                  font-family="'Oswald', sans-serif"
                  letter-spacing="15px"
                  text-anchor="middle"
                >
                  A11 GAllERY!
                </text>

                <mask id="mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                  <use
                    x="-6"
                    y="-6"
                    stroke="#000"
                    stroke-width="5"
                    xlinkHref="#text"
                    opacity="1"
                    fill="#000"
                  />
                </mask>
              </defs>

              <use
                x="6"
                y="6"
                xlinkHref="#text"
                opacity="1"
                fill="url(#pattern)"
                mask="url(#mask)"
              />

              <use x="0" y="0" xlinkHref="#text" fill="#fff" />
            </svg>
          </div>

          <ScrollIntoView selector="#galery">
            <button className="container-Button">
              Go to Galery
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}
