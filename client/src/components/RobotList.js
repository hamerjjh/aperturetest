import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


class RobotList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/robots/')
        .then(response => {
            this.setState({ robots: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
}

  render() {
    return (
        <div>
          <h2>Here are a list of robots</h2>
        </div>
    );
  }
}

export default RobotList;
