import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../actions";
import Complete from "./Complete";

export default function Todo(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(props.todo._id));
  };

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
        <span onClick={handleDelete} className="delete">
          &#10799;
        </span>
      </li>
    </>
  );
}
