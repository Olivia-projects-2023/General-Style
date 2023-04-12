import React from "react";

function ScrollDown() {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll-button">
        <i
          class="uil uil-mouse-alt"
          style={{
            height: "120px",
            stroke: "var(--title-color)",
            strokeWidth: "20px",
            color:"black"
          }}
        ></i>
        <span className="home_scroll-name"> Scroll Down</span>
        <i class="uil uil-arrow-down home_scroll-arrow"></i>
      </a>
    </div>
  );
}

export default ScrollDown;
