import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RobotList from "./components/RobotList";
import CreateRobot from "./components/CreateRobot";
import EditRobot from "./components/EditRobot";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Here are a list of robots</h2>
        </div>

        <Route path="/" exact component={RobotList} />
        <Route path="/edit/:id" component={EditRobot} />
        <Route path="/create" component={CreateRobot} />
      </Router>
    );
  }
}

export default App;
