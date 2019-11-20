import React from 'react';

const ItemDetails = ({item}) => {
  if (!item) {
    return null;
  }

  const actionsListItems = item.actions.map((action) => (
    <li
      key={action.id}
      className="action"
    >
      <div className="label">{action.name}</div>
    </li>
  ));

  return (
    <div className="item-details">
      <div className="header">{item.name}</div>
      <div className="content">
        <div className="general-details">
          <div className="title">GENERAL DETAILS ?</div>
          <br/>
          <div className="label">NAME</div>
          <br/>
          <div className="text">{item.name}</div>
          <br/>
          <div className="label">DESCRIPTION</div>
          <br/>
          <div className="text">{item.description}</div>
          <br/>
          <div className="label">RESOURCE TYPE</div>
          <br/>
          <div className="text">{item.resourceType}</div>
          <br/>
          <div className="label">PATH</div>
          <br/>
          <div className="text">{item.path}</div>
          <br/>
        </div>
        <div className="permitted-actions">
          <div className="title">PERMITTED ACTIONS ?</div>
          <br/><br/>
          <ul>{actionsListItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
