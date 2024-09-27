import { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import { Bio } from "../utils/Data";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="nav">
      <div className="navbar-container">
        <a className="nav-logo" href="#About">
          Portfolio
        </a>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <div className="nav-items">
          <a className="nav-link" href="#About">
            About
          </a>
          <a className="nav-link" href="#Skills">
            Skills
          </a>
          <a className="nav-link" href="#Experience">
            Experience
          </a>
          <a className="nav-link" href="#Projects">
            Projects
          </a>
          <a className="nav-link" href="#Education">
            Education
          </a>
          <a className="nav-link" href="#Contact">
            Contact
          </a>
        </div>

        <div className="btn-container">
          <a className="github-btn" href={Bio.github} target="_Blank">
            {" "}
            Github Profile
          </a>
        </div>

        {isOpen && (
          <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#About"
            >
              About
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Skills"
            >
              Skills
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Experience"
            >
              Experience
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Projects"
            >
              Projects
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Education"
            >
              Education
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Contact"
            >
              Contact
            </a>
            <div className="mobile-btn-container">
              <a
                className="mobile-github-btn"
                href={Bio.github}
                target="_Blank"
              >
                Github Profile
              </a>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
};

export default NavBar;
