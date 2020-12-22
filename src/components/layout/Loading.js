import React from 'react';

function Loading({ status, children }) {
  if (status) {
    return <>{children}</>;
  }

  return (
    <div className="loading">
      <i className="fas fa-spinner" />
    </div>
  );
}

export default Loading;
