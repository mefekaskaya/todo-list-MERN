import React from "react";
import moment from "moment";

export default function Todo(props) {
  const { todo } = props;

  return (
    <>
      <li className={todo.isCompleted ? "checked" : ""}>
        <span>{todo.text}</span>
        <div className="d-flex justify-content-center">
          Deadline :&nbsp;&nbsp;
          <div>{moment(todo.deadLine).format("MMM Do YYYY")}</div>
        </div>
      </li>
    </>
  );
}
