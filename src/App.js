import React from "react";
import Form from "./components/Form";

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      color: "red",
      name: ""
    }
    // Toujours binder le this
    this.onClickColor=this.onClickColor.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
  }

  onClickColor() {
    this.setState({
      color: this.states.color === "blue" ? "red" : "blue"
    });
  }

  onChangeName(name) {
    this.setState({
      name
    });
  }

  render() {
    return (
      <div>
        <Form 
          name={this.state.name} 
          color={this.state.color} 
          onClick={this.onClickColor}
          onChange={this.onChangeName}
        />
      </div>
    )
  }
}

export default App;