import mock from './mock';
import actions from '../actions';

function fetchItems() {
  return (dispatch) => (
    mock.get('/items')
      .then((data) => dispatch(actions.getItems(data)))
  );
}

function fetchCurrentItem(id) {
  return (dispatch) => (
    mock.get('/items', {id})
      .then((data) => dispatch(actions.getCurrentItem(data)))
  )
}

export default {
  fetchItems,
  fetchCurrentItem,
};
