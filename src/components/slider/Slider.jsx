import React from "react";

const Slider = () => {
  return (
    <div className="slider-four">
      <div className="yoann_tm_hero" id="home" data-style="one">
        <div className="frame-layout__particles" style={{backgroundColor: "rgba(0,0,0,0.15)"}}>
        </div>
        <div className="background">
          <div
            className="image slider-image"
            style={{ backgroundImage: "url(img/slider/slider-img.jpg)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Yoann Mukendi
                  <br />
                </span>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Full Stack Developer
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO
              <span className="overlay_effect"></span>
            </a>
            <a 
            href="yoann-mukendi-resume.pdf"
            target="_blank"
            className="white-fill-bg btn-outline btn-medium"
            style={{marginLeft: "6px"}}
            >DOWNLOAD CV<span className="overlay_effect"></span></a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
