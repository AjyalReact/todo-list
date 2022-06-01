import React, { Component } from 'react';
import './style.css';

class NoTasks extends Component {
  render() {
    return (
      <div className='no-task-msg'>
        <p>No Tasks Added To Show.</p>
      </div>
    )
  }
}

export default NoTasks;
