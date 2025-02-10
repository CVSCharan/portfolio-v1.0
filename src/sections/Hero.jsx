import HeroBgAnimation from "../components/HeroBgAnimation";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
} from "../utils/motion";
import HeroImg from "../assets/HeroImg.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../utils/Data";
import { Tilt } from "react-tilt";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="About" className="hero-container">
      <div className="hero-bg">
        <HeroBgAnimation />
      </div>

      <motion.div {...headContainerAnimation}>
        <div className="hero-inner-container">
          <div className="hero-left-container">
            <motion.div {...headTextAnimation}>
              <div className="title">
                Hi, I am <br /> {Bio.name}
              </div>
              <div className="text-loop">
                Expertise:{" "}
                <div className="text-span">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...headContentAnimation}>
              <div
                className="sub-title"
                style={{
                  fontWeight: "300",
                  textAlign: "justify",
                  maxWidth: "600px",
                }}
              >
                {Bio.description}
              </div>
            </motion.div>

            <div className="resume-btn" href={Bio.resume} target="_blank">
              Check Resume
            </div>
          </div>
          <div className="hero-right-container">
            <motion.div {...headContentAnimation}>
              <Tilt>
                <img className="img" src={HeroImg} alt="CVS CHARAN" />
              </Tilt>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
