import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Privacy from './Privacy';
import Terms from './Terms';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="absolute w-screen h-screen">
        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
