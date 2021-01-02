import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Landing from './Landing';
import Privacy from './Privacy';
import Terms from './Terms';

const Footer = () => {
  return (
    <div className="absolute h-screen w-screen overflow-x-hidden">
      <div className="absolute inset-x-0 bottom-2 text-center text-gray-500 text-lg">
        © 2021.{' '}
        <a
          href="https://www.abhijitgupta.io"
          className="hover:text-red-500"
          target="_blank"
          rel="noreferrer"
        >
          Abhijit Gupta.
        </a>{' '}
        <Link to="/privacy" className="hover:text-red-500">
          Privacy Policy
        </Link>
        .{' '}
        <Link to="/terms" className="hover:text-red-500">
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

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
