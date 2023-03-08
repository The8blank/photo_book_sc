import React, { useRef, useState, useEffect } from "react";
import "./slider.scss";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Slider = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const slider = useRef(null);

  useEffect(() => {
    setCurr(0);
  }, [slides]);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="slider" ref={slider}>
      <div
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
        className="slider__images-wrapper"
      >
        {slides}
      </div>
      <div className="slider__button-container">
        <button onClick={prev}>
          <FiArrowLeft />
        </button>
        <button onClick={next}>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
