import React from 'react';

function Card({ title = '', children = {} }) {
  const renderTitle = () => {
    return title ? <h2>{title}</h2> : null;
  };

  return (
    <div className="card card-app">
      {renderTitle()}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
