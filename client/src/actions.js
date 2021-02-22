import axios from "axios";
import { GET_TODOS, LOAD_TODOS, COMPLETE_TODO } from "./constants";

axios.defaults.baseURL = "http://localhost:5000/api";

export const getTodos = () => (dispatch) => {
  dispatch({ type: LOAD_TODOS });

  axios
    .get("/todos")
    .then((res) =>
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const completeTodo = (todoId) => (dispatch) => {
  axios
    .post(`/todos/${todoId}/complete`)
    .then((res) =>
      dispatch({
        type: COMPLETE_TODO,
        payload: res.data.todoId,
      })
    )
    .catch((error) => console.log(error));
};
