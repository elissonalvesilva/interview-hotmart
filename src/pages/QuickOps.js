import React from 'react';
import Header from '../components/Header';

import Sidebar from '../components/Sidebar';

function QuickOps() {
  return (
    <div className="quickops d-flex justify-content-between">
      <section className="quickops-section flex-fill">
        <Header />
      </section>
      <Sidebar />
    </div>
  );
}

export default QuickOps;
