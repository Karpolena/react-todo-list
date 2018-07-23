import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: []
        }

    }
    
    changeUserInput(event) {
        this.setState({
             userInput: event             
             });
    }

    addToList(event) {
        let listArray = this.state.list;
        listArray.push(event);
        this.setState({ 
            list: listArray,
            userInput: ""
         });

    }
    render() {
              return (
                  <div className="ToDoMain">
                  <h1>Вставайте, граф! Вас ждут великие дела!</h1>
                      <input 
                      type="text" 
                      value={this.state.userInput}
                      onChange={ (e) => this.changeUserInput(e.target.value) }
                      className="userInput" />
                      <button onClick={ () => this.addToList(this.state.userInput) }> Press me </button>
                      <ul>
                          {this.state.list.map((val) => <li>{val}</li>)}
                      </ul>
                  </div>
              );
          }
   
}

 export default ToDoList;