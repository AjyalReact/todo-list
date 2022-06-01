import React, { Component } from 'react';
import NoTasks from '../NoTasks';
import SingleTask from '../SingleTask';
import './style.css';

class Result extends Component {
  render() {
    return (
      <div className='view-task'>
        <h3 className="title-div">Tasks To Do</h3>
        <NoTasks />
        <ul className="tasks-list">
          <SingleTask />
        </ul>
      </div>
    )
  }
}

export default Result;
