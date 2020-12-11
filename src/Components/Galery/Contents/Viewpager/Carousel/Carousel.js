import React, { useState, useEffect } from "react";
import range from "lodash-es/range";
import "./Carousel.scss";
import imgList from "./bg/Export";



const generate = (before, arr, length) => {
  let result = range(length);
  for (let i = 0; i < length; i++) {
    const temp = arr[Math.floor(Math.random() * arr.length)];

    if (
      !before.find((e) => e === temp) &&
      !result.find((e) => e === temp) &&
      temp.src !== undefined
    ) {
      result[i] = temp;
    } else {
      i = i - 1;
    }
  }

  return result;
};
const first = (arr, length) => {
  let result = range(length);
  for (let i = 0; i < length; i++) {
    const temp = arr[Math.floor(Math.random() * arr.length)];
    if (!result.find((e) => e === temp)) {
      result[i] = temp;
    } else {
      i = 0;
    }
  }

  return result;
};

export default function Carousel({ length, view }) {
  const img = imgList[view];

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(first(img, length));
  }, [view, length, img]);
  useEffect(() => {
    const a = setTimeout(() => {
      if (view === "girl" ) {
        setData((state) => generate(state, img, length));
      } else {
        setData(first(img, length));
      }
    }, Math.random() * 3500 + Math.max(length*1300,2000));
    return () => {
      clearTimeout(a);
    };
  }, [length, data, img, view]);
  return (
    <div className="Carousel-Container" id="carousel-id">
      {data.map((e, i) => (
        <div
         
          style={{ boxShadow: `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.6) 0px 30px 90px`}}
          className="script-bf-box"
        >
          <div   key={Math.floor(Math.random()*234234234)} className="content-carousel" style={{
           
            backgroundImage: `url(${e.src})`
           
          }}>


          </div>


        </div>
      ))}
    </div>
  );
}
