import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import QuickOps from '../pages/QuickOps';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={QuickOps} />
        </Switch>
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
