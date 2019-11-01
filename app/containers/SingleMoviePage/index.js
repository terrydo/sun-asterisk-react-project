/**
 *
 * SingleMoviePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import HeaderContainer from 'containers/HeaderContainer';
import makeSelectSingleMoviePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SingleMoviePage() {
  useInjectReducer({ key: 'singleMoviePage', reducer });
  useInjectSaga({ key: 'singleMoviePage', saga });

  return (
    <>
      <Helmet>
        <title>SingleMoviePage</title>
        <meta name="description" content="Description of SingleMoviePage" />
      </Helmet>

      <HeaderContainer />
    </>
  );
}

SingleMoviePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  singleMoviePage: makeSelectSingleMoviePage(),
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

export default compose(withConnect)(SingleMoviePage);
