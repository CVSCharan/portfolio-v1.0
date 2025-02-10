import {
  PhoneAndroidOutlined,
  EmailOutlined,
  LinkedIn,
  WhatsApp,
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
            <a className="social-media-icon" href={Bio.phone} target="display">
              <PhoneAndroidOutlined />
            </a>
            <a
              className="social-media-icon"
              href={Bio.whatsApp}
              target="_blank"
            >
              <WhatsApp />
            </a>
            <a className="social-media-icon" href={Bio.email} target="display">
              <EmailOutlined />
            </a>
            <a
              className="social-media-icon"
              href={Bio.linkedin}
              target="display"
            >
              <LinkedIn />
            </a>
          </div>
          <p className="footer-copyright">
            {`© 2022 - 2025 CVS CHARAN. All rights reserved.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
