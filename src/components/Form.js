import React from "react";

class Form extends React.Component {

  render() {
    console.log('Form#render this props', this.props);
    console.log('Form#render this state', this.state);
    return(
      <div style={{
        backgroundColor: this.props.color
      }}>
        <input 
          type="text" 
          value={this.props.name}
          onChange={(evt) => {
            const name = evt.target.value;
            console.log("name", name)
            // Je change le state (permet de récuperer la totalité du champ)
            this.setState({
              name
            });
          }}
        />
        <button onClick={this.props.onClick}>Click</button>
      </div>
    )
  }
}

export default Form;