import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Test = () => <h1>Test</h1>;

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/test"}>Test</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
