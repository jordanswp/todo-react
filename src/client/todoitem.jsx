import React, { Component } from "react";

export class ToDoItem extends Component {


  render() {

    const toDoList = this.props.toDoList;
    let todoitem;
    if (toDoList.length > 0) {

      todoitem = toDoList.map((todolist) => {


        return (
          <div>

              <strong>To Do:</strong> {todolist.item}

          </div>
        );
      });
    }
    return <div>{todoitem}</div>;
  }
}
    export default ToDoItem;