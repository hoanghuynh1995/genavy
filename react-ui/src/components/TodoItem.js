import React, { Component } from 'react'
class TodoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <span>{this.props.data.key} - {this.props.data.value}</span>
      </div>
    )
  }
}
export default TodoItem