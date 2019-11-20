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


  // TODO Consider moving into separate component
  const listItems = items.map((item) => {
    const selected = currentItem && currentItem.id === item.id;

    return (
      <li
        key={item.id}
        onClick={() => handleClick(item)}
        className={`item ${selected ? 'selected' : '' }`}
      >
        <p className="text">
          <img src="images/active.svg"/>
          <span>{item.name}</span>
        </p>
        {
          selected
            ? <img src="images/arrow-right.svg" alt=">"/>
            : null
        }
      </li>
    )
  });

  return (
    <div className="app">
      <div className="items-list">
        <div className="title">Items</div>
        <ul>{listItems}</ul>
      </div>
      <ItemDetails item={currentItem}/>
    </div>
  );
};

export default App;
