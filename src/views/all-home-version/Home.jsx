import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import Brand from "../../components/BrandAnimation";
import CallToAction from "../../components/calltoactions/CallToAction";

const HomeTwo = () => {
  return (
    <div className="home-four">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      <Skills />
      {/* End Skills Section */}


      <div className="yoann_tm_section">
        <div className="yoann_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End yoann_tm_partners */}


      <CallToAction />
      {/* End CallToAction */}

    </div>
  );
};

export default HomeTwo;
