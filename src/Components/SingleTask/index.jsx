import React, { Component } from "react";
import { BiCircle, BiTrash, BiCheckCircle } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import "./style.css";

class SingleTask extends Component {
  render() {
    const { task:{id, name, isDone}, handleDone, handleDelete, setEditMood } = this.props;
    return (
      <li className={isDone ? 'single-task done' : 'single-task'}>
        <button className="done-btn" onClick={e => handleDone(e, id)}>
          <i className="icon">
            {
              isDone ? <BiCheckCircle /> : <BiCircle />
            }
          </i>
        </button>
        <p className="task-name">{name}</p>
        <button className="edit-btn" onClick={e => setEditMood(e, id)}>
          <i className="icon">
            <MdOutlineEdit />
          </i>
        </button>
        <button className="trash-btn" onClick={e => handleDelete(e, id)}>
          <i className="icon">
            <BiTrash />
          </i>
        </button>
      </li>
    );
  }
}

export default SingleTask;
