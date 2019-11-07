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
import Logout from 'containers/Logout/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import SingleMoviePage from 'containers/SingleMoviePage/Loadable';
import BuyTicketPage from 'containers/BuyTicketPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import routes from 'app-routes';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.login} component={AuthenticationPage} />
        <Route path={routes.logout} component={Logout} />;
        <Route path={routes.profile} component={ProfilePage} />;
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.singleMovie} component={SingleMoviePage} />;
        <Route path={routes.buyTicket} component={BuyTicketPage} />;
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
