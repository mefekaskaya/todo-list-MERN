import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions";
import Todo from "./Todo";

export default function ListTodos(props) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <ul>{todos && todos.map((todo) => <Todo key={todo._id} todo={todo} />)}</ul>
  );
}
