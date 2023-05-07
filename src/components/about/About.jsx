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
                  <p>Hi, my name is Yoann and I am a Full Stack Developer. My expertise includs CSS, JavaScript, ReactJS, NodeJS, PHP, Laravel and WordPress.</p> 
                  <p>I have a passion for creating beautiful, scalable and user-friendly web applications that meet the needs of the clients. </p>
                  <p>My background in IT has given me a strong foundation in programming concepts and technology, allowing me to adapt quickly to new tools and frameworks. </p>
                  <p>I am always seeking to expand my knowledge and skills in the field of web development, and I am constantly learning new technologies to stay up-to-date with the latest trends and best practices. </p>
                  <p>If you're looking for a  skilled and dedicated Full Stack Developer with a passion for creating beautiful and functional web applications, I would love to hear from you.</p>
                </div>
                <div
                  className="yoann_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a 
                  href="yoann-mukendi-resume.pdf"
                  target="_blank"
                  >
                    Download CV
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
