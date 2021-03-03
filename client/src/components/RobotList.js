import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Robot = props => (
  <tr>
      <td>{props.robot.name}</td>
      <td>{props.robot.color}</td>
      <td>{props.robot.attack}</td>
      <td>{props.robot.defense}</td>
      <td>
          <Link to={"/edit/"+props.robot._id}>Edit</Link>
      </td>
  </tr>
)

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

  robotList() {
    return this.state.robots.map(function(currentRobot, i) {
        return <Robot todo={currentRobot} key={i} />;
    });
  } 

  render() {
    return (
        <div>
          <h2>Here are a list of robots</h2>
              <table className="table table-striped" style={{ marginTop: 20 }}> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Attack</th>
                            <th>Defense</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.robotList() }
                    </tbody>
              </table>
        </div>
    );
  }
}

export default RobotList;
