import React, { useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Expense from '../components/Expense';
import Timeline from '../components/Timeline';

function QuickOps({ history }) {
  // useEffect(() => {
  //   const checkService = async () => {
  //     const { status } = await axios.get(
  //       'https://api-front-end-challenge.buildstaging.com/api/status'
  //     );

  //     if (status) {
  //       history.push('service-unavailabled');
  //     }
  //   };
  //   checkService();

  //   return () => null;
  // });

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
