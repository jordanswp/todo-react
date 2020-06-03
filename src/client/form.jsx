import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  handleInputField(event) {
    this.props.inputField(event);
  }

  clickHandler(e) {
    this.props.clickEvent(e);
    this.mainInput.value = "";
  }

  render() {
    return (
      <div>

        <input
            onChange={(e)=>{this.handleInputField(e)}}
            ref={(ref) => this.mainInput= ref}
        />

        <button
            onClick={(event)=>{this.clickHandler(event)}} >
        Submit
        </button>

      </div>
    );
  }
}

export default Form;