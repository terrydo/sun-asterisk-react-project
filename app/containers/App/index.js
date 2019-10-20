/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthenticationPage from 'containers/AuthenticationPage/Loadable';

// eslint-disable-next-line no-unused-vars
import GlobalStyle from 'assets/scss/global.scss';
// eslint-enable-next-line no-unused-vars

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={AuthenticationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
