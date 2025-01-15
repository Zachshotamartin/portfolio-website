import "./App.css";
import React, { useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Athletics from "./components/athletics/Athletics";
import Line from "./components/line/Line";
// import ColorDivGrid from "./components/color/ColorDivGrid";
import Popup from "./components/popup/Popup";
import ProjectFullPage from "./components/portfolio/project/ProjectFullPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { projects } from "./components/projectInfo";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Banner />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Line text="About Me" from="right" />
                  <Main />
                  <Line text="Portfolio" from="left" />
                  <Portfolio id="portfolio" />
                  <Line text="Athletics" from="right" />
                  <Athletics id="athletics" />

                  <Popup />
                </>
              }
            />
            <Route
              path="/projects/kumo"
              element={
                <>
                  <ProjectFullPage projectInfo={projects.project4} />
                </>
              }
            />
            <Route
              path="/projects/raytracing"
              element={
                <>
                  <ProjectFullPage projectInfo={projects.project3} />
                </>
              }
            />
            <Route
              path="/projects/focus"
              element={
                <>
                  <ProjectFullPage projectInfo={projects.project2} />
                </>
              }
            />
            <Route
              path="/projects/greenlight"
              element={
                <>
                  <ProjectFullPage projectInfo={projects.project1} />
                </>
              }
            />
            <Route
              path="/projects/computervision"
              element={
                <>
                  <ProjectFullPage projectInfo={projects.project5} />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
