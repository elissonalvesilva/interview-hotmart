import React from 'react';
import classnames from 'classnames';

function Button({
  children,
  type = 'button',
  className = '',
  onClick = () => {},
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classnames('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
