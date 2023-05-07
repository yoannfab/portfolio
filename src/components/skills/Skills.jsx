import React from "react";
import { frontendSkills, backendSkills } from "./SkillsData";

const Skills = () => {
  return (
    <div className="yoann_tm_section">
      <div className="yoann_tm_skills">
      <div className="yoann_tm_title">
      <h3 style={{ fontSize: "2.5rem", textAlign: "center" }}>SKILLS</h3>
    </div>
        <div className="container" style={{ marginTop: "150px"}}>
          <div className="skills_inner">
            <div className="center" data-aos="fade-right" data-aos-duration="1200">
            </div>
            {/* End .center */}

            <div className="left" data-aos="fade-right" data-aos-duration="1200">
              <div className="yoann_tm_title">
                <h3 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Frontend Skills</h3>
              </div>
              {frontendSkills.map((skill) => (
                <div key={skill.name} style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  <span className="label">{skill.name}</span>
                  <span style={{ fontSize: "4rem", marginLeft: "10px"}}>{skill.icon}</span>
                </div>
              ))}
            </div>
            {/* End .left */}

            <div className="right" data-aos="fade-right" data-aos-duration="1200">
              <div className="yoann_tm_title">
                <h3 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Backend Skills</h3>
              </div>
              {backendSkills.map((skill) => (
                <div key={skill.name} style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  <span className="label">{skill.name}</span>
                  <span style={{ fontSize: "4rem", marginLeft: "10px"}}>{skill.icon}</span>
                </div>
              ))}
            </div>
            {/* End .right */}
          </div>
          {/* End .skills_inner */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Skills;
