import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../utils/Data";
import ExperienceCard from "../components/cards/ExperienceCard";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="Experience" className="experience-container">
      <div className="experience-wrapper">
        <div className="experience-title">Experience</div>
        <div className="experience-desc" style={{ marginBottom: "40px" }}>
          My work experience as a Software Engineer and Data Analyst, working on
          different companies and projects.
        </div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
