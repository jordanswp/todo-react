import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './form';
import ToDoItem from './todoitem';


class App extends React.Component {

    constructor(){
      super()

      this.state = {
        toDoList : [],
        userInput : '',
      }
  }

//input form
    inputField(event){
      var input = event.target.value;
      this.setState({
        userInput: input
      })
    }

//set event when user clicks submit button
    clickEvent(event){
        let userType = this.state.userInput;
        console.log("userinput is " + this.state.userInput);

        let list = this.state.toDoList;
        this.setState({
            list: list.push(
                        {item: userType},
                    )
        });
    }

  render() {
    return (
      <div>

      <Form
        inputField={(e)=>{this.inputField(e)}}
        clickEvent={(event)=>{this.clickEvent(event)}}
      />

      <ToDoItem
        toDoList={this.state.toDoList}
      />

      </div>
    );
  }
}

export default hot(module)(App);
