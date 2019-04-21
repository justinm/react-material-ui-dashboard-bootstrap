import { TOGGLE_MENU } from "./app-actions";

const defaultState = {
  menuOpen: true
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, menuOpen: action.open };
    default:
      return state;
  }
};

export default reducer;
