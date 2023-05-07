import React, { useState } from "react";
import Scrollspy from "react-scrollspy";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="yoann_tm_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
            <a href="#home">
              <img src="/img/logo/new/dark.png" alt="partners brand" />
            </a>
          </div>
          {/* End logo */}
          <div className="menu">
            <Scrollspy
              className="anchor_nav"
              items={["home", "about", "portfolio", "contact"]}
              currentClassName="current"
              offset={-200}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a
                  className="white-fill-bg btn-outline btn_sm"
                  href="#contact"
                >
                CONTACT ME
                </a>
              </li>
            </Scrollspy>
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End yoann_tm_topbar */}

      {/* Start yoann mobile menu */}
      <div className="yoann_tm_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <a href="#home">
                  <img src="/img/logo/new/dark.png" alt="partners brand" />
                </a>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <span className="close_menu" onClick={handleClick} style={{cursor: "pointer"}}>
              Close
            </span>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={handleClick}>
                    Portfolio
                  </a>
                </li>

                <li>
                  <a href="#contact"
                   onClick={handleClick} className="white-fill-bg btn-outline btn_sm"
                    
                  >
                    CONTACT ME
                  </a>
                </li>
              </ul>
              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End yoann mobile menu */}
    </>
  );
};

export default Header;
