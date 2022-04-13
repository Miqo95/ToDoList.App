import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Redux/tasksSlice";
import "./Components.css";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

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
