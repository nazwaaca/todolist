import Header from './components/header.js';
import Footer from './components/footer.js';
import TodoInput from './components/todo';
import TodoItem from './components/listtodo';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Mau ngapain aja hari ini ?"}
      ],
      nextId: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="todo-wrapper">
          <TodoInput todoText="" addTodo={this.addTodo} />
          <div className='title-list'>UNFINISHED LIST</div>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
