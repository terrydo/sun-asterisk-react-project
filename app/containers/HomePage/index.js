/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import HomeMoviesWithFilters from './HomeMoviesWithFilters';
import HomeMoviesRecommended from './HomeMoviesRecommended';
import HomeTopNews from './HomeTopNews';

import reducer from './reducer';
import saga from './saga';

const HomePage = ({ state }) => {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const movies = state.homePage ? state.homePage.movies : [];

  return (
    <>
      <HeaderContainer movies={movies} />
      <HomeMoviesWithFilters />
      <HomeMoviesRecommended />
      <HomeTopNews />
      <FooterContainer />
    </>
  );
};

HomePage.propTypes = {
  state: PropTypes.object,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
