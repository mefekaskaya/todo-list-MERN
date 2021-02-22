import { GET_TODOS, LOAD_TODOS, COMPLETE_TODO } from "./constants";

const initialState = {
  loading: false,
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };

    case LOAD_TODOS:
      return {
        ...state,
        loading: true,
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload)
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          return todo;
        }),
      };

    default:
      return state;
  }
}
