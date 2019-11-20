import React, {useEffect} from 'react';
import {useDispatch, useSelector, useCallback} from 'react-redux';
import api from './api';
import ItemDetails from './components/ItemDetails';

const App = () => {
  const items = useSelector((state) => state.items);
  const currentItem = useSelector((state) => state.currentItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api.fetchItems());
  }, []);

  const handleClick = (item) => {
    dispatch(api.fetchCurrentItem(item.id));
  };

  const listItems = items.map((item) =>
    <li
      key={item.id}
      onClick={() => handleClick(item)}
    >
      {item.name}
    </li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
      <ItemDetails item={currentItem}/>
    </div>
  );
};

export default App;
