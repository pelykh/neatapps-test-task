import React, {useEffect} from 'react';
import {useDispatch, useSelector, useCallback} from 'react-redux';
import api from './api';
import ItemDetails from './components/ItemDetails';
import ListItem from './components/ListItem';

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
  const listItems = items.map((item) => <ListItem {...{item, currentItem, handleClick}}/>);

  return (
    <div>
      <nav className="nav-bar">Demo App</nav>
      <div className="page">
        <div className="items-list">
          <div className="title">Items</div>
          <ul>{listItems}</ul>
        </div>
        <div className="details-wrapper">
          <ItemDetails item={currentItem}/>
        </div>
      </div>
    </div>
  );
};

export default App;
