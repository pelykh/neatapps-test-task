import data from './data.json';

const withActions = (id) => {
  const item = data.resources.find((resource) => resource.id === id);

  return {
    ...item,
    actions: item.actionIds
      .map((i) => data.actions.find((action) => action.id === i)),
  };
};

const get = async (url, params = {}) => (
  params.id
    ? withActions(`${params.id}`)
    : data.resources
);

export default {
  get,
};
