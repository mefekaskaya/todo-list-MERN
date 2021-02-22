import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-date-picker";
import { FaPlus } from "react-icons/fa";
import "./AddTodo.css";

import { addTodo } from "../../actions/todo";

export default function AddTodo(props) {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [newTask, setNewTask] = useState("");

  const handleDate = (date) => {
    setDate(date);
  };

  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTask, date));
    setNewTask("");
  };

  return (
    <div style={{ margin: "1rem auto" }}>
      <form
        className="form-inline"
        style={{ margin: "auto", maxWidth: "60%" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="newTask">New Task : </label>
        <input
          id="newTask"
          style={{ boxSizing: "border-box", margin: "1rem 1rem" }}
          onChange={handleChange}
          type="text"
          placeholder="Add new task"
          value={newTask}
        />
        <div>
          <DatePicker
            minDate={new Date()}
            onChange={handleDate}
            value={date}
            style={{ margin: "1rem 1rem" }}
          />
        </div>

        <button
          style={{ margin: "1rem 1rem" }}
          onSubmit={handleSubmit}
          type="submit"
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
