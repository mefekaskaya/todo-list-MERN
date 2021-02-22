import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../actions/todo";
import Todo from "./Sections/Todo/Todo";

export default function ListTodos(props) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [todos]);

  return (
    <ul>{todos && todos.map((todo) => <Todo key={todo._id} todo={todo} />)}</ul>
  );
}
