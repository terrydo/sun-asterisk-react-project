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
  if (movies) {
    return <RenderedHeader movies={movies} />;
  }

  if (singleMovie) {
    return <RenderedHeaderWithoutSlider movie={singleMovie} />;
  }

  if (banner) {
    return <RenderedHeaderWithBanner banner={banner} />;
  }

  return '';
}

HeaderContainer.propTypes = {
  movies: PropTypes.array,
  singleMovie: PropTypes.object,
  banner: PropTypes.string,
};

const mapStateToProps = state => {
  console.log(state);
  return {
    state,
  };
};

const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withConnect,
)(HeaderContainer);
