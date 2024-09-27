import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../utils/Data";
import EducationCard from "../components/cards/EducationCard";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="Education" className="education-container">
      <div className="education-wrapper">
        <div className="education-title">Education</div>
        <div className="education-desc" style={{ marginBottom: "40px" }}>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
