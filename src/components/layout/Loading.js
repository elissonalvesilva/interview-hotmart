import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import classnames from 'classnames';

function Loading({ className = '' }) {
  return (
    <div className={classnames('', className)}>
      <div className="loading-app">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}

export default Loading;
