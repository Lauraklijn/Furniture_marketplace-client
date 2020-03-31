import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Nav-index";

const Home = () => <h1>Home</h1>;
const Test = () => <h1>Test</h1>;

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
