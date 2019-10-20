/**
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RenderedHeader } from 'components/Header';
import demoBg from 'assets/images/demo-bg.jpg';

import makeSelectHeaderContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

// eslint-disable-next-line react/prop-types
export function HeaderContainer({ headerContainer }) {
  const { movies } = headerContainer;

  useInjectReducer({ key: 'headerContainer', reducer });
  useInjectSaga({ key: 'headerContainer', saga });

  return <RenderedHeader movies={movies} />;
}

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

export default compose(withConnect)(HeaderContainer);
