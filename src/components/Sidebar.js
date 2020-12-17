import React from 'react';
import classnames from 'classnames';

import SidebarDetails from './SidebarDetails';
import constants from '../utils/constants';

function Sidebar({ requestStatus = 'APPROVED' }) {
  const classNameStatus = () => {
    if (requestStatus) {
      return `request__status--${constants.AvailabledStatus[requestStatus]}`;
    }
    return 'request__status--reproved';
  };

  return (
    <div className="sidebar-app align-self-stretch">
      <header className={classnames('sidebar-app__status', classNameStatus())}>
        <label className="status__label">Status</label>
        <p className="status__value">Disponivel</p>
      </header>
      <SidebarDetails />
    </div>
  );
}

export default Sidebar;
