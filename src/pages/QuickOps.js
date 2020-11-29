import React from 'react';

import Sidebar from '../components/Sidebar';

function QuickOps() {
  return (
    <div className="quickops d-flex justify-content-between">
      <aside className="quickops-aside flex-fill">
        <h2>aside</h2>
      </aside>
      <Sidebar />
    </div>
  );
}

export default QuickOps;
