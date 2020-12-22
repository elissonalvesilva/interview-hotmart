import React, { useEffect, useState } from 'react';

import Conditional from './layout/Conditional';
import SidebarItem from './SidebarItem';

import constants from '../utils/constants';
import useFetch from '../hooks/useFetchData';
import formatter from '../formatters/sidebarDataFormatter';

function Sidebar() {
  const [data, setData] = useState({});
  const { status, response } = useFetch(
    'https://api-front-end-challenge.buildstaging.com/api/sidebar'
  );

  useEffect(() => {
    if (response) {
      const formattedData = formatter.groupBy(
        response?.content,
        'accountabilityStatus'
      );
      setData(formattedData);
    }
  }, [response]);

  const classNameStatus = (requestStatus) => {
    if (requestStatus) {
      return `request__status--${constants.AvailabledStatus[requestStatus]}`;
    }
    return 'request__status--reproved';
  };

  return (
    <div className="sidebar-app align-self-stretch">
      <Conditional condition={status}>
        {Object.keys(data).map((item) => {
          const key = Math.random(0, new Date().getTime());
          return (
            <SidebarItem
              key={key}
              data={data[item]}
              status={classNameStatus(item)}
            />
          );
        })}
      </Conditional>
    </div>
  );
}

export default Sidebar;
