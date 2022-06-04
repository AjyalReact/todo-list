import React, { Component } from "react";
import { Form, PageHeader, Result } from "./Components";
import checkTasks from "./utils/checkTasks";
import completeTask from "./utils/completeTask";
import addDeletedTask from "./utils/addDeletedTask";
import deleteTask from "./utils/deleteTask";
import checkTaskIsDeleted from "./utils/checkTaskIsDeleted";

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const deletedTasks = localStorage.getItem("deletedTasks")
  ? JSON.parse(localStorage.getItem("deletedTasks"))
  : [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      deletedTasks: deletedTasks,
      inputValue: "",
      errorMsg: "",
      editMood: "",
    };
  }
  setTasks = (tasks) => {
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  setDeletedTasks = (deletedTasks) => {
    this.setState({ deletedTasks });
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  };

  setInputValue = (inputValue) => {
    this.setState({ inputValue });
  };

  setEditMood = (e, id) => {
    e.preventDefault();
    const { tasks } = this.state;
    const thisTask = tasks.find((item) => item.id === id);
    this.setState({ editMood: id });
    this.setInputValue(thisTask.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, inputValue, editMood } = this.state;
    if (editMood) {
      const thisTask = tasks.find((item) => item.id === editMood);
      thisTask.name = inputValue;
      this.setTasks(tasks);
      this.setState({ editMood: false });
      this.setInputValue("");
    } else {
      const { inputValue, tasks, deletedTasks } = this.state;
      if (inputValue) {
        const task = {
          id: Date.now(),
          name: inputValue,
          isDone: false,
        };
        if (checkTasks(task, tasks)) {
          // Check if task is not deleted before adding it
          if (checkTaskIsDeleted(task, deletedTasks)) {
            this.setTasks([...tasks, task]);
            this.setInputValue("");
            this.setState({ errorMsg: "" });
          } else {
            this.setState({
              errorMsg: "You can't add task have been deleted!",
            });
          }
        } else {
          this.setState({ errorMsg: "Task already exist!" });
        }
      } else {
        this.setState({ errorMsg: "Please enter task!" });
      }
    }
  };

  handleDone = (e, id) => {
    e.preventDefault();
    const { tasks } = this.state;
    completeTask(id, tasks);
    this.setTasks(tasks);
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    const { tasks, deletedTasks } = this.state;
    this.setDeletedTasks(addDeletedTask(id, tasks, deletedTasks));
    this.setTasks(deleteTask(id, tasks));
  };

  render() {
    const { tasks, inputValue, errorMsg } = this.state;
    return (
      <div className="container">
        <main className="main-page">
          <PageHeader />
          <Form
            handleSubmit={this.handleSubmit}
            inputValue={inputValue}
            setInputValue={this.setInputValue}
          />
          {errorMsg ? <p className="error">{errorMsg}</p> : false}
          <Result
            tasks={tasks}
            handleDone={this.handleDone}
            handleDelete={this.handleDelete}
            setEditMood={this.setEditMood}
          />
        </main>
      </div>
    );
  }
}

export default App;
