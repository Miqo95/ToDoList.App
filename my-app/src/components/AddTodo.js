import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/tasksSlice";
import "./Components.css";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    document.getElementsByClassName("task-button")[0].innerHTML = "Add";
    if (value.trim().length === 0) {
      alert("Enter a new task !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );

    setValue("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button className="task-button" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
