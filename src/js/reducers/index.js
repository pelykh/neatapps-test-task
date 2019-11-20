import {GET_CURRENT_ITEM, GET_ITEMS} from "../actions";

const initialState = {
  items: [],
  currentItem: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, items: action.items};
    case GET_CURRENT_ITEM:
      return {...state, currentItem: action.item};
  }
  return state;
}

export default reducer;
