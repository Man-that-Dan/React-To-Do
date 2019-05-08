import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {
  // getStyle = () => {
  //   return {
  //     backgroundColor: '#f4f4f4',
  //     padding: '10px',
  //     borderBottom: '1px #ccc dotted',
  //
  //   }
  // }

  state = {
    title: ''
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {

    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input type="text" name="title" style={{flex: '10', padding: '5px'}}
        onChange={this.onChange} placeholder="Add Todo Item"  value={this.state.title}/>
        <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
      </form>
    )
  }
}


export default AddTodo;
