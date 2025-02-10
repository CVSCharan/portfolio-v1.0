import { skills } from "../utils/Data";
import { Tilt } from "react-tilt";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="Skills" className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        <div className="skills-desc">
          Here are some of my skills on which I have been working on for the
          past 3+ years.
        </div>
        <div className="skills-sub-container">
          {skills.map((skill, index) => (
            <Tilt key={`skills-${index}`}>
              <div className="skill" key={`skill-${index}`}>
                <div className="skill-title">{skill.title}</div>
                <div className="skill-list">
                  {skill.skills.map((item, index_x) => (
                    <div className="skill-item" key={`skill-x-${index_x}`}>
                      <img className="skill-img" src={item.image} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
