import React, { Component } from 'react'
import TodoItem from '../../components/TodoItem';
import * as actions from './actions';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }
  addItem = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.inputVal,
      key: Date.now(),
    });
  }
  deleteItem = i => {
    this.props.deleteTodo(i);
  }
  componentDidUpdate() {
    // this.props.inputElement.current.focus()
    // console.log('componentDidUpdate');
  }
  handleChange = event => {
    this.setState({
      inputVal: event.target.value
    })
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="Task" onChange={this.handleChange}
              value={this.state.inputVal} />
            <button type="submit"> Add Task </button>
          </form>
          <ul>
            {
              this.props.list.map(item => (<li key={item.key}
                onClick={() => { this.deleteItem(item) }}>
                <TodoItem data={item} />
              </li>))
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: item => dispatch(actions.addItem(item)),
    deleteTodo: item => dispatch(actions.deleteItem(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)