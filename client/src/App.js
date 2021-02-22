import React from "react";
import Header from "./components/Header";
import ListTodos from "./components/ListTodos";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="header">
          <Header title="To Do Application" />
        </div>
        <ListTodos />
      </div>
    </Provider>
  );
}

export default App;
