import * as actions from "./actionTypes";

const initialState = {
  pending: false,
  error: null,
  items: [],
  allItems: [],
};

function providers(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_PROVIDERS:
      return {
        ...state,
        pending: true,
      };

    case actions.RECEIVE_PROVIDERS:
      return {
        ...state,
        pending: false,
        items: action.value,
        allItems: action.value,
      };

    case actions.FILTER_PROVIDERS:
      return {
        ...state,
        pending: false,
        items: action.value,
      };

    default:
      return state;
  }
}

export default providers;
