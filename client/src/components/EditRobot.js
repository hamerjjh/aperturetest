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
          <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <input  type="text"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div>
                        <label>Color: </label>
                        <input  type="text"
                                value={this.state.color}
                                onChange={this.onChangeColor}
                                />
                    </div>
                    <div>
                        <label>Attack: </label>
                        <input  type="text"
                                value={this.state.attack}
                                onChange={this.onChangeAttack}
                                />
                    </div>
                    <div>
                        <label>Defense: </label>
                        <input  type="text"
                                value={this.state.defense}
                                onChange={this.onChangeDefense}
                                />
                    </div>
                    <br/>
                        <div>
                        <Link to={`/robots/${this.state.id}`}>
                        <button>Save Robot</button>
                       </Link>
                        </div>
          
            </form>
        </div>
   
    );
  }
}

export default EditRobot;
