import mock from './mock';
import actions from '../actions';

function fetchItems() {
  return (dispatch) => (
    mock.get('/items')
      .then((data) => dispatch(actions.getItems(data)))
  );
}

export default {
  fetchItems,
};
