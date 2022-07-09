import logo from "./logo.svg";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Home} />
        <Route path="/" component={Projects} />
        <Route path="/" component={About} />
        <Route path="/" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
