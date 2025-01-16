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
import AthleticTakeAways from "./components/athletictakeaways/AthleticTakeAways";
import ProjectFullPage from "./components/portfolio/project/ProjectFullPage";
import MoreAboutMe from "./components/moreAboutMe/moreAboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fetchProjectData from "./projectInfo";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjects } from "./reducers/projectsReducer";
import SceneInit from "./lib/sceneInit";

function App() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.animate();
  }, []);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchProjectData(); // Fetch the project data
        dispatch(setProjects(fetchedProjects));
      } catch (error) {
        console.error("Error loading projects:", error.message);
      } finally {
        setLoading(false); // Ensure loading is set to false after try or catch
      }
    };

    loadProjects();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = await fetchProjectData();
        setProjects(projects);
      } catch (error) {
        console.error("Error loading projects:", error.message);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <>
        <canvas id="myThreeJsCanvas" />
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
          }}
        >
          Loading...
        </h1>
      </>
    );
  }
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
                  {/* <Line text="About Me" from="right" /> */}
                  <Main />
                  <Line text="Portfolio" from="left" />
                  <Portfolio id="portfolio" />
                  <Line text="Athletics" from="right" />
                  <Athletics id="athletics" />
                  <AthleticTakeAways />
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
            <Route
              path="/moreaboutme"
              element={
                <>
                  <MoreAboutMe />
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
