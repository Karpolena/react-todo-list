import React, { Component } from 'react';
import List from './List';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: []
        }

    }

    removeHandler(id) {
        let listArray = this.state.list;
        listArray = listArray.filter(item => item.id != id);
        this.setState({
            list: listArray
        })
    }
    
    changeUserInput(value) {
        this.setState({
             userInput: value             
        });
    }    

    addToList(value) {
        let listArray = this.state.list;
        listArray.push({
            title: value,
            id: JSON.stringify(Math.random() * (100000 - 100) + 100)
        });
        this.setState({ 
            list: listArray,
            userInput: ""
         });
         console.log(listArray);

    }
    render() {
              return (
                  <div className="toDoMain">
                  <h1>To do list</h1>
                      <input 
                      type="text" 
                      value={this.state.userInput}
                      onChange={ (e) => this.changeUserInput(e.target.value) }
                      className="userInput toDoMain__item" />
                      <button onClick={ () => this.addToList(this.state.userInput) }> Press me </button>
                      <List removeHandler={this.removeHandler.bind(this)} list={this.state.list}/>
                  </div>
              );
          }
   
}

 export default ToDoList;