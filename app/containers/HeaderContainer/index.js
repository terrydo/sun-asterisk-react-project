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
  const isLogin = !!localStorage.getItem('ACCESS_TOKEN');

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
