import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions";

export default function ListTodos(props) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  console.log(todos);
  return <ul></ul>;
}
