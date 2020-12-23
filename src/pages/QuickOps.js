import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Expense from '../components/Expense';
import Timeline from '../components/Timeline';

import ServiceUnavailabled from './ServiceUnavailabled';

import useFetch from '../hooks/useFetchData';

function QuickOps() {
  const { responseStatus } = useFetch(
    'https://api-front-end-challenge.buildstaging.com/api/status'
  );

  console.log(responseStatus);
  if (responseStatus > 400) {
    return <ServiceUnavailabled />;
  }

  return (
    <div className="quickops d-flex justify-content-between">
      <section className="quickops-section flex-fill">
        <Header />
        <Expense />
        <Timeline />
      </section>
      <Sidebar />
    </div>
  );
}

export default QuickOps;
