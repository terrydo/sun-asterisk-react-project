/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import withAuthenticate from 'withAuthenticate';
import HeaderContainer from 'containers/HeaderContainer';
import HomeMoviesWithFilters from './HomeMoviesWithFilters';
import HomeMoviesRecommended from './HomeMoviesRecommended';
import HomeTopNews from './HomeTopNews';

const HomePage = () => (
  <>
    <HeaderContainer />
    <HomeMoviesWithFilters />
    <HomeMoviesRecommended />
    <HomeTopNews />
  </>
);

export default withAuthenticate(HomePage);
