import { GET_TODOS, LOAD_TODOS } from "./constants";

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
    default:
      return state;
  }
}
