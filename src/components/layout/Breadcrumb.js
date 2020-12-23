import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbComponent({ items = [] }) {
  return (
    <Breadcrumb className="breadcrumb-app">
      {items.map((item) => {
        return (
          <Breadcrumb.Item
            key={item.label}
            href={item.href}
            active={item.active}
          >
            {item.label}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;
