import React from 'react';

const ListItem = ({item, currentItem, handleClick}) => {
  const selected = currentItem && currentItem.id === item.id;

  return (
    <li
      key={item.id}
      onClick={() => handleClick(item)}
      className={`item ${selected ? 'selected' : ''}`}
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
};

export default ListItem;
