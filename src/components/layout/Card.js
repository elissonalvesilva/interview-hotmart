import React from 'react';
import classnames from 'classnames';
import Conditional from './Conditional';

function Card({ title = '', children = {}, className = '' }) {
  const renderTitle = () => (
    <Conditional condition={title}>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
    </Conditional>
  );

  return (
    <div className={classnames('card card-app', className)}>
      {renderTitle()}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
