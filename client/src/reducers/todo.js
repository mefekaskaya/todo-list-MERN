import {
  GET_TODOS,
  LOAD_TODOS,
  COMPLETE_TODO,
  ADD_TODO,
  DELETE_TODO,
} from "../actions/constants";

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

    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };

    default:
      return state;
  }
}
