export const GET_ITEMS = 'GET_ITEMS';

const getItems = (items) => ({
  type: GET_ITEMS,
  items,
});

export default {
  getItems,
}
