import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Athletics from "./components/athletics/Athletics";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Navigation />
      </header>
      <main>
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
