import React from "react";
import Form from "./components/Form";

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      color: "red",
      name: ""
    }
    this.onClickColor=this.onClickColor.bind(this);
  }

  onClickColor() {
    this.setState({
      color: this.states.color === "blue" ? "red" : "blue"
    })
  }

  render() {
    return (
      <div>
        <Form 
          name={this.state.name} 
          color={this.state.color} 
          onClick={this.onClickColor}
        />
      </div>
    )
  }
}

export default App;