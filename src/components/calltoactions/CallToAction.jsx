import React from "react";
import Modal from "react-modal";
import Contact from "../Contact";

Modal.setAppElement("#root");

const CallToAction = () => {

  return (
    <div className="yoann_tm_section" id="contact" style={{backgroundColor: "#F9F9F9"}}>
        <div className="yoann_tm_mobalbox_contact container" style={{maxWidth: "1800px"}}>
          {/* End close icon */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>Get in touch</h3>
              </div>
              {/* End title */}

              <div className="wrapper">
                <div className="left" style={{marginRight: "20px"}}>
                  <div className="fields">
                    <Contact />
                  </div>
                </div>
                {/* End left */}
                <div className="right" style={{ marginRight: "40px", position: "relative", marginTop: "-75px"}}>
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/contact/contact-image.jpg" alt="placeholder" style={{ maxHeight: "480px" }}/>
                  <div
                    className="main"
                    style={{ 
                      backgroundImage: "url(img/contact/contact-image.jpg)"
                    }}
                  ></div>
                </div>

                {/* End image */}
              </div>
                {/* End right */}
              </div>
              {/* End wrapper */}

            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      {/* End modal */}
    </div>
  );
};

export default CallToAction;
