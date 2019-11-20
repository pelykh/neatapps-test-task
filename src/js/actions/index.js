export const GET_ITEMS = 'GET_ITEMS';
export const GET_CURRENT_ITEM = 'GET_CURRENT_ITEM';

const getItems = (items) => ({
  type: GET_ITEMS,
  items,
});

const getCurrentItem = (item) => ({
  type: GET_CURRENT_ITEM,
  item,
});

export default {
  getItems,
  getCurrentItem,
}
