import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../../../actions/todo";

import "./Complete.css";

export default function Complete(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(todo._id));
  };

  return (
    <div className="col-2 mx-auto col-lg-2 col-xs-3">
      <label className="containerCheckBox">
        Completed :
        <input
          style={{ marginLeft: "1rem" }}
          name="completed"
          type="checkbox"
          value={todo._id}
          checked={todo.isCompleted}
          onChange={handleComplete}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
