import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import "./style.css";

class Form extends Component {
  render() {
    const { inputValue, setInputValue, handleSubmit } = this.props;
    return (
      <form className="task-enter">
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="task-input"
          type="text"
          placeholder="Type Your Task Here..."
        />
        <button className="task-add" onClick={handleSubmit}>
          <i className="add-icon">
            <FaPlus />
          </i>
        </button>
      </form>
    );
  }
}

export default Form;
