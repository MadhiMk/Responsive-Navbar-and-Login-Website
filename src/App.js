import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import SignIn from "./components/pages/signin";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
