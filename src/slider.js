import "./slider.css";
import { useEffect } from "react";
const Slider = () => {
  async function iterateInnerSlides(innerSlides, delay) {
    for (let i = 0; i < innerSlides.length; i++) {
      setTimeout(() => {
        innerSlides[i].style.width = "300px";
        innerSlides[i].style.backgroundColor = "red";
      }, 0);
      setTimeout(() => {
        innerSlides[i].style.backgroundColor = "white";
        innerSlides[i].style.width = "0px";
      }, delay);
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (i === 2) {
        i = -1;
      }
    }
  }

  async function iteratePhotoSlides(tests, delay) {
    for (let i = 0; i < tests.length; i++) {
      setTimeout(() => {
        tests[i].style.animationName = "slideout";
        tests[i].style.animationDuration = "normal";
        tests[i].style.animationDuration = "0.5s";
        tests[i].style.width = "0";

        if (i === 2) {
          tests[0].style.animationName = "slidein";
          tests[0].style.animationDuration = "normal";
          tests[0].style.animationDuration = "0.5s";
          tests[0].style.width = "100%";
        } else {
          tests[i + 1].style.animationName = "slidein";
          tests[i + 1].style.animationDuration = "normal";
          tests[i + 1].style.animationDuration = "0.5s";
          tests[i + 1].style.width = "100%";
        }
      }, delay);
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (i === 2) {
        i = -1;
      }
    }
  }

  useEffect(() => {
    const innerSlides = document.querySelectorAll(".innerslidebar");
    const slides = document.querySelectorAll(".slider");
    iteratePhotoSlides(slides, 5000);
    iterateInnerSlides(innerSlides, 5000);
  });

  return (
    <div className="main-container">
      <div className="container">
        <div
          className="slider one"
          style={{ backgroundImage: `url("./img/bg1.jpg")` }}
        ></div>
        <div
          className="slider two"
          style={{ backgroundImage: `url("./img/bg2.jpg")` }}
        ></div>
        <div
          className="slider three"
          style={{ backgroundImage: `url("./img/bg4.jpg")` }}
        ></div>
      </div>
      <div className="slidebar-container">
        <div className="slidebar">
          <div className="innerslidebar"></div>
        </div>
        <div className="slidebar">
          <div className="innerslidebar"></div>
        </div>
        <div className="slidebar">
          <div className="innerslidebar"></div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
