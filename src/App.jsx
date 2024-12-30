import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <SocialLinks />
      <ScrollToTop />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
