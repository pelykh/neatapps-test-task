import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import api from './api';

const App = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api.fetchItems());
  }, []);

  const listItems = items.map((item) =>
    <li>{item.name}</li>
  );

  return <ul>{listItems}</ul>;
};

export default App;
