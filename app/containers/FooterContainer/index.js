/**
 *
 * FooterContainer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFooterContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function FooterContainer() {
  useInjectReducer({ key: 'footerContainer', reducer });
  useInjectSaga({ key: 'footerContainer', saga });

  return <div />;
}

FooterContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  footerContainer: makeSelectFooterContainer(),
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
  memo,
)(FooterContainer);
