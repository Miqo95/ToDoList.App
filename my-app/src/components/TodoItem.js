import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Redux/tasksSlice";
import "./Components.css";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const editTask = () => {
    document.getElementsByClassName("task-input")[0].value = title;
    document.getElementsByClassName("task-button")[0].innerHTML = "Save";
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <li className="task-item">
      <div>{title}</div>
      <div>
        <button
          className="edit-task-button"
          onClick={() => {
            editTask();
          }}
        >
          Edit
        </button>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
