import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <iframe
        className="iFrame"
        title="silent-hill"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268695871&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&loop=true"
      ></iframe>
      <Footer />
    </div>
  );
}

export default App;
