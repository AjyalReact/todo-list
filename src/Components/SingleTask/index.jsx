import React, { Component } from 'react';
import { BiCircle, BiTrash } from 'react-icons/bi';
import { MdOutlineEdit } from 'react-icons/md';
import './style.css';

class SingleTask extends Component {
  render() {
    return (
      <li className='single-task'>
        <button className="done-btn">
          <i className="icon"><BiCircle /></i>
        </button>
        <p className="task-name">Task Name Here...</p>
        <button className="edit-btn">
          <i className="icon"><MdOutlineEdit /></i>
        </button>
        <button className="trash-btn">
          <i className="icon"><BiTrash /></i>
        </button>
      </li>
    )
  }
}

export default SingleTask;
