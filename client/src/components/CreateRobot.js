import React, { Component } from "react";


class CreateRobot extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeAttack = this.onChangeAttack.bind(this);
        this.onChangeDefense = this.onChangeDefense.bind(this);
       

        this.state = {
            name: '',
            color: '',
            attack: '',
            defense: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onChangeAttack(e) {
        this.setState({
            attack: e.target.value
        });
    }

    onChangeDefense(e) {
        this.setState({
            defense: e.target.value
        });
    }




  render() {
    return (
        <div>
          <h2>Create a robot</h2>
        </div>
    );
  }
}

export default CreateRobot;