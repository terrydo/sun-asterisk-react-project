/**
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { compose } from 'redux';

import PropTypes from 'prop-types';

import {
  RenderedHeader,
  RenderedHeaderWithoutSlider,
  RenderedHeaderWithBanner,
} from 'components/Header';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export function HeaderContainer({ movies, singleMovie, banner }) {
  const token = localStorage.getItem('ACCESS_TOKEN');
  // eslint-disable-next-line no-unneeded-ternary
  const isLogin = token !== null ? true : false;

  if (movies) {
    return <RenderedHeader movies={movies} isLogin={isLogin} />;
  }

  if (singleMovie) {
    return (
      <RenderedHeaderWithoutSlider movie={singleMovie} isLogin={isLogin} />
    );
  }

  if (banner) {
    return <RenderedHeaderWithBanner banner={banner} isLogin={isLogin} />;
  }

  return '';
}

HeaderContainer.propTypes = {
  movies: PropTypes.array,
  singleMovie: PropTypes.object,
  banner: PropTypes.string,
};

const mapStateToProps = state => ({
  state,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withConnect,
)(HeaderContainer);
