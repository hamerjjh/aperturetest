import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RobotList from "./components/RobotList";
import CreateRobot from "./components/CreateRobot";
import EditRobot from "./components/EditRobot";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <NavBar />
        </div>

        <Route path="/" exact component={RobotList} />
        <Route path="/edit/:id" component={EditRobot} />
        <Route path="/create" component={CreateRobot} />
      </Router>
    );
  }
}

export default App;
