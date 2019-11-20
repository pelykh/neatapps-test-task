import data from './data.json';

const withActions = (item) => ({
  ...item,
  actions: item.actionIds
    .map((i) => data.actions.find((action) => action.id === i)),
});

const get = (url, params={}) => (
  params.id
    ? withActions(data.resources[params.id])
    : data.resources
);

export default {
  get,
};
