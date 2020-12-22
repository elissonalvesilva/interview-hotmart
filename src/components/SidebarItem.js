import React from 'react';
import classnames from 'classnames';

import SidebarDetails from './SidebarDetails';

function SidebarItem({ data, status }) {
  return (
    <>
      <header className={classnames('sidebar-app__status', status)}>
        <label className="status__label">Status</label>
        <p className="status__value">Disponivel</p>
      </header>
      {data.map((item) => {
        const key = Math.random(0, new Date().getTime());
        return <SidebarDetails key={key} data={item} />;
      })}
    </>
  );
}

export default SidebarItem;
