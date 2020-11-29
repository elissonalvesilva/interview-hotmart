import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrump() {
  return (
    <Breadcrumb className="breadcrumb-app">
      <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="/">QuickOps</Breadcrumb.Item>
      <Breadcrumb.Item active>current</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrump;
