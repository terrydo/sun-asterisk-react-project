/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import withAuthenticate from 'withAuthenticate';
import HeaderContainer from 'containers/HeaderContainer';
import HomeMoviesWithFilters from 'containers/HomeMoviesWithFilters';

const HomePage = () => (
  <>
    <HeaderContainer />
    <HomeMoviesWithFilters />
  </>
);

export default withAuthenticate(HomePage);
