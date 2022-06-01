import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './style.css';

class Form extends Component {
  render() {
    return (
      <form className='task-enter'>
        <input className="task-input" type="text" placeholder="Type Your Task Here..." />
        <button className="task-add">
          <i className='add-icon'><FaPlus /></i>
        </button>
      </form>
    )
  }
}

export default Form;
