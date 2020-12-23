import React from 'react';

import TimelineItem from './TimelineItem';

import useFetch from '../hooks/useFetchData';
import Loading from './layout/Loading';

function Timeline() {
  const { status, response } = useFetch(
    'https://api-front-end-challenge.buildstaging.com/api/timeline'
  );

  if (!status) {
    return <Loading className="timeline-loading" />;
  }

  return (
    <div className="timeline-app row">
      {response?.content?.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Timeline;
