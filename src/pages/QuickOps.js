import React from 'react';
import Header from '../components/Header';

import Sidebar from '../components/Sidebar';
import Timeline from '../components/Timeline';

function QuickOps() {
  return (
    <div className="quickops d-flex justify-content-between">
      <section className="quickops-section flex-fill">
        <Header />
        <Timeline />
      </section>
      <Sidebar />
    </div>
  );
}

export default QuickOps;
