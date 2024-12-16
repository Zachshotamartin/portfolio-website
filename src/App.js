import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Athletics from "./components/athletics/Athletics";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Line from "./components/line/Line";
import ColorDivGrid from "./components/color/ColorDivGrid";
import Message from "./components/message/Message";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Banner />
      </header>
      <main>
        <Line text="About Me" from="right" />
        <Main />
        <Line text="Athletics" from="left" />
        <Athletics />
        <Line text="Portfolio" from="right" />
        <Portfolio />
        <Message />
        <ColorDivGrid />
      </main>
    </div>
  );
}

export default App;
