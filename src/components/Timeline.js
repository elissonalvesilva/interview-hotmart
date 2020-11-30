import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';

function Timeline() {
  const [timelineItems, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://api-front-end-challenge.buildstaging.com/api/timeline'
      );

      if (data) {
        const { content } = data;
        setItems([...content]);
      }
    };

    getData();
  }, []);

  return (
    <div className="timeline-app row">
      {timelineItems.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Timeline;
