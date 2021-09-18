import "./App.css";
import Navbar from "./components/nav-bar/nav-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";

function App() {
  return (
    <div>
      <div orientation="left" className="left-container">
        <LeftPanel />
      </div>
      <div orientation="right" className="right-container">
        <RightPanel />
      </div>
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
