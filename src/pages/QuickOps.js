import React from 'react';
import Header from '../components/Header';

import Sidebar from '../components/Sidebar';

function QuickOps() {
  return (
    <div className="quickops d-flex justify-content-between">
      <aside className="quickops-aside flex-fill">
        <Header />
      </aside>
      <Sidebar />
    </div>
  );
}

export default QuickOps;
