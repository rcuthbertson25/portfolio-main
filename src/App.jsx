import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";


const App = () => {
  return <div>
    <Cursor/>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="services"/></section>
    <section><Skills/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
