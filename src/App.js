import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import uuid from 'uuid';
import axios from 'axios';


import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data}))
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  }

  addTodo = (title) => {
    const newnode = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      id: uuid.v4(),
      title: title,
      completed: false
    })
    //  .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
      //using my own data with fake api because it keeps returning same id
      .then(res => this.setState({ todos: [...this.state.todos, newnode]}));

  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />

        </div>

      </div>
      </Router>
    );
  }
}


export default App;