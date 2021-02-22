import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import ListTodos from "./components/ListTodos/ListTodos";
import AddTodo from "./components/AddTodo/AddTodo";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="header">
          <AddTodo />
          <Header title="To Do Application" />
        </div>
        <ListTodos />
      </div>
    </Provider>
  );
}

export default App;
