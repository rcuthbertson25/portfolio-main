import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Career from "./components/career/Career";
import Education from "./components/education/Education";


const App = () => {
  return <div>
    <Cursor/>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Education"><Parallax type="education"/></section>
    <section><Education /></section>
    <section id="Skills"><Parallax type="services"/></section>
    <section><Skills/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Career"><Parallax type="career"/></section>
    <section><Career /></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
