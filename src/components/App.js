import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// layout components
import SideMenu from './layout/SideMenu';
import Head from './layout/Head';
import Container from './layout/Container';
import Breadcrumb from './layout/Breadcrumb';

// pages
import QuickOps from '../pages/QuickOps';
import ServiceUnavailabled from '../pages/ServiceUnavailabled';

function App() {
  const breadcrumbItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/', label: 'QuickOps' },
    { href: '/', label: 'current', active: true },
  ];

  return (
    <Router>
      <>
        <SideMenu />
        <Head />
        <Container>
          <Breadcrumb items={breadcrumbItems} />
          <Switch>
            <Route exact path="/" component={QuickOps} />
            <Route
              exact
              path="/service-unavailabled"
              component={ServiceUnavailabled}
            />
          </Switch>
        </Container>
      </>
    </Router>
  );
}

export default App;
