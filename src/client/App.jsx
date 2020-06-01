import React from 'react';
import { hot } from 'react-hot-loader';



class App extends React.Component {

    constructor(){
      super()

      this.state = {
        toDoList : ["clean", "wash"],
        word : '',
        inputClass: '',
      }
}

//input form
    changeHandler(event){
      var input = event.target.value;

      if( input.length <= 1 ){
        this.setState({
            inputClass: 'error'
        })
      }
      // console.log("new input ->  " + input);
      this.setState({
        word: input
      })
    }

//set event when user clicks submit button
    clickEvent(event){
        let inputtedWord = this.state.word;
        console.log("word is " + this.state.word);


        let list = this.state.toDoList;
        console.log("list is: " + list)

        this.mainInput.value = "";

        this.setState({
            list: list.push(inputtedWord),
        })
    }

  render() {

    let inputClass = this.state.inputClass

    const data = this.state.toDoList;
    const listItems = data.map((d) => <li>{d}</li>)

    return (
      <div>

      <div>
      {listItems}
      </div>

        <input
        className={inputClass}
        ref={(ref) => this.mainInput= ref}
        onChange={(event)=>{this.changeHandler(event);}}/>

        <button onClick={(event)=>{this.clickEvent(event);}}>Submit</button>
      </div>
    );
  }
}

export default hot(module)(App);
