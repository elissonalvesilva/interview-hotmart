import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// layout components
import SideMenu from './layout/SideMenu';
import Head from './layout/Head';
import Container from './layout/Container';
import Breadcrumb from './layout/Breadcrump';

// pages
import QuickOps from '../pages/QuickOps';

function App() {
  return (
    <Router>
      <>
        <SideMenu />
        <Head />
        <Container>
          <Breadcrumb />
          <Switch>
            <Route exact path="/" component={QuickOps} />
          </Switch>
        </Container>
        {/* <AppSidebar />
        <Container>
          <AppPageHeader />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/store-config" component={StoreConfig} />
            <PrivateRoute exact path="/store-config/help" component={Help} />
          </Switch>
        </Container>
        <AppLoading /> */}
      </>
    </Router>
  );
}

export default App;
