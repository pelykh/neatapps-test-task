import {GET_ITEMS} from "../actions";

const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, items: action.items}
  }
  return state;
}

export default reducer;
