/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import withAuthenticate from 'withAuthenticate';
import HeaderContainer from '../HeaderContainer';

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
    </>
  );
};

export default withAuthenticate(HomePage);
