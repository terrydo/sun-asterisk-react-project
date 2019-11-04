/**
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RenderedHeader, RenderedHeaderWithoutSlider } from 'components/Header';

import { withRouter } from 'react-router-dom';

import makeSelectHeaderContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function HeaderContainer({
  headerContainer,
  isWithoutSlider,
  singleMovie,
}) {
  const { movies } = headerContainer;

  useInjectReducer({ key: 'headerContainer', reducer });
  useInjectSaga({ key: 'headerContainer', saga });

  if (!isWithoutSlider) {
    return <RenderedHeader movies={movies} />;
  }

  if (singleMovie) {
    return <RenderedHeaderWithoutSlider movie={singleMovie} />;
  }

  return '';
}

HeaderContainer.propTypes = {
  isWithoutSlider: PropTypes.bool,
  headerContainer: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  headerContainer: makeSelectHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(HeaderContainer);
