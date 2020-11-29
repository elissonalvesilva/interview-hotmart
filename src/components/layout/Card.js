import React from 'react';
import classnames from 'classnames';

function Card({ title = '', children = {}, className = '' }) {
  const renderTitle = () => {
    return title ? <h1 className="card-title">{title}</h1> : null;
  };

  return (
    <div className={classnames('card card-app', className)}>
      {renderTitle()}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
