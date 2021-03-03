import React, { Component } from "react";
import axios from 'axios';

class EditRobot extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        color: '',
        attack: '',
        defense: ''
    }
}
componentDidMount() {
  axios.get('http://localhost:4000/robots/'+this.props.match.params.id)
      .then(response => {
          this.setState({
              name: response.data.name,
              color: response.data.color,
              attack: response.data.attack,
              defense: response.data.defense
          })   
      })
      .catch(function (error) {
          console.log(error);
      })
}


  render() {
    return (
        <div>
          <h2>Edit Robot</h2>
        </div>
   
    );
  }
}

export default EditRobot;
