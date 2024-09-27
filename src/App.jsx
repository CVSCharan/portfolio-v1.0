import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import StartCanvas from "./components/canvas/Stars";
import "./App.css";

const App = () => {
  return (
    <main>
      <NavBar />
      <div className="main-body">
        <StartCanvas />
        <Hero />
        <div className="body-wrapper">
          <Skills />
          <Experience />
        </div>
        <Projects />
        <div className="body-wrapper">
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
