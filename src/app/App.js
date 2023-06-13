import React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Media from "../components/Media/Media";
import Footer from "../components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Certifications />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
