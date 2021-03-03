import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Here are a list of robots</h2>
        </div>
      </Router>
    );
  }
}

export default App;
