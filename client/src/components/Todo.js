import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { completeTodo } from "../actions";
import Complete from "./Complete";

export default function Todo(props) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(props.todo._id));
  };
  const { todo } = props;

  return (
    <>
      <li
        style={{ display: "flex" }}
        className={todo.isCompleted ? "checked" : ""}
      >
        <span onClick={handleComplete}>{todo.text}</span>
        <Complete todo={todo} />

        <div className="d-flex justify-content-center">
          Deadline :&nbsp;&nbsp;
          <div>{moment(todo.deadLine).format("MMM Do YYYY")}</div>
        </div>
      </li>
    </>
  );
}
