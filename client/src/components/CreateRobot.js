import React, { Component } from "react";
import styled from "styled-components";

const NewRobotFormContainer = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 0px;
padding-bottom: 10px;
background-color: white;
opacity: .8;
justify-content: center;
margin: 0 auto;
width: 100%;
margin-bottom: 20px;
align-items: center;
`

const NewRobotForm = styled.div`
margin-top: 20px;
`

const FormText = styled.div`
margin-top: 10px;
margin-bottom: 10px;
font-family: 'Cabin Condensed', sans-serif;
font-size: 18px;
color: rgb(17, 17, 114);
label {
padding-right: 5px;
margin-bottom: 5px;
}
textarea, input {
border-radius: 5px;
width: 100%
}
`

const NewFormText = styled.div`
font-size: 32px;
`

class CreateRobot extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeAttack = this.onChangeAttack.bind(this);
        this.onChangeDefense = this.onChangeDefense.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Color: ${this.state.color}`);
        console.log(`Attack: ${this.state.attack}`);
        console.log(`Defense: ${this.state.defense}`);
        
        this.setState({
            name: '',
            color: '',
            attack: '',
            defense: ''
        })
    }




  render() {
    return (
        <div>
          <NewRobotFormContainer>
            <NewRobotForm>
            
            
              <form onSubmit={this.onSubmit}>
                    <FormText>
                        <NewFormText>Create A New Robot Below: </NewFormText>
                        <label>Name: </label>
                        <input onChange={this.onChangeName} type="text" value={this.state.name} />
                    </FormText>
                    <FormText>
                        <label >Color: </label>
                        <textarea onChange={this.onChangeColor}  type="text" value={this.state.color} />
                    </FormText>
                    <FormText>
                        <label>Attack: </label>
                        <textarea onChange={this.onChangeAttack}  type="text" value={this.state.attack} />
                    </FormText>
                    <FormText>
                        <label>Defense: </label>
                        <textarea onChange={this.onChangeDefense} type="text" value={this.state.defense} />
                    </FormText>
                    
                    <button>Save Robot</button>
                    </form>
             </NewRobotForm>
             </NewRobotFormContainer>
        </div>
    );
  }
}

export default CreateRobot;