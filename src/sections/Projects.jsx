import { useState } from "react";
import styled from "styled-components";
import { projects } from "../utils/Data";
import ProjectCard from "../components/cards/ProjectCard";
import "../styles/Projects.css";

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <section id="Projects" className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-title">Projects</div>
        <div className="projects-desc">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>
        <div className="toggle-btn-group">
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <div className="divider" />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            {`WEB APP'S`}
          </ToggleButton>
          <div className="divider" />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            {`ANDROID APP'S`}
          </ToggleButton>
          <div className="divider" />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </div>

        <div className="projects-card-container">
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, ind) => (
              <ProjectCard key={ind} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
