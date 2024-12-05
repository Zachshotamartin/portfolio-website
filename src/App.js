import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Athletics from "./components/athletics/Athletics";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Line from "./components/Line/Line";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Navigation />
      </header>
      <main>
        <Line text="Testing" from="right" />
        <Main />
        <Portfolio />
        <Athletics />
        <Contact />
        <Resume />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
