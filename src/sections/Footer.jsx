import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Bio } from "../utils/Data";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-logo">CVS CHARAN</div>
          <div className="footer-nav">
            <a className="footer-nav-link" href="#About">
              About
            </a>
            <a className="footer-nav-link" href="#Skills">
              Skills
            </a>
            <a className="footer-nav-link" href="#Experience">
              Experience
            </a>
            <a className="footer-nav-link" href="#Projects">
              Projects
            </a>
            <a className="footer-nav-link" href="#Education">
              Education
            </a>
          </div>
          <div style={{ marginTop: "10px" }} className="socialmedia-icons">
            <a
              className="social-media-icon"
              href={Bio.facebook}
              target="display"
            >
              <FacebookRounded />
            </a>
            <a
              className="social-media-icon"
              href={Bio.twitter}
              target="display"
            >
              <Twitter />
            </a>
            <a
              className="social-media-icon"
              href={Bio.linkedin}
              target="display"
            >
              <LinkedIn />
            </a>
            <a className="social-media-icon" href={Bio.insta} target="display">
              <Instagram />
            </a>
          </div>
          <p className="footer-copyright">
            &copy; 2024 CVS CHARAN. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
