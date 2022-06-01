import React, { Component } from "react";
import NoTasks from "../NoTasks";
import SingleTask from "../SingleTask";
import "./style.css";

class Result extends Component {
  render() {
    const { tasks, handleDone, handleDelete, setEditMood } = this.props;
    return (
      <div className="view-task">
        <h3 className="title-div">Tasks To Do</h3>
        {tasks.length === 0 ? <NoTasks /> : false}
        <ul className="tasks-list">
          {tasks.length
            ? tasks.map((task) => (
                <SingleTask
                  key={task.id}
                  task={task}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                  setEditMood={setEditMood}
                />
              ))
            : false}
        </ul>
      </div>
    );
  }
}

export default Result;
