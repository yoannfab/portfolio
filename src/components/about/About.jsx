import React from "react";

const About = () => {
  return (
    <>
      <div className="yoann_tm_section" id="about">
        <div className="yoann_tm_about" style={{paddingBottom: "90px"}}>
          <div className="container" style={{ maxWidth: "1650px"}}>
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/about/about.jpg" alt="placeholder" style={{maxHeight: "600px", objectFit: "cover"}} />
                  <div
                    className="main"
                    style={{ 
                      backgroundImage: "url(img/about/about.jpg)",
                      maxHeight: "700px"
                    }}
                  ></div>
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className="right" style={{maxHeight: "880px", maxWidth: "700px"}}>
                <div
                  className="yoann_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span> 
                  <h3>Full Stack Developer expert in ReactJS, NodeJS, PHP and Laravel</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>Hi, my name is Yoann, and I am a Full Stack Developer. My expertise includes CSS, JavaScript, ReactJS, NodeJS, PHP, Laravel, Shopify, and WordPress.</p> 
                  <p>I am passionate about creating beautiful, scalable, user-friendly web applications that meet clients' needs.</p>
                  <p>I would love to hear from you if you're looking for a skilled and dedicated Full Stack Developer passionate about creating beautiful and functional web applications.</p>
                </div>
                <div
                  className="yoann_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a 
                  href="#contact"
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
