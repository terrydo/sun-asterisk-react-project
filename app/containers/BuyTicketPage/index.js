/**
 *
 * BuyTicketPage
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
import makeSelectBuyTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BuyTicketPage() {
  useInjectReducer({ key: 'buyTicketPage', reducer });
  useInjectSaga({ key: 'buyTicketPage', saga });

  return (
    <div>
      <Helmet>
        <title>BuyTicketPage</title>
        <meta name="description" content="Description of BuyTicketPage" />
      </Helmet>
    </div>
  );
}

BuyTicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  buyTicketPage: makeSelectBuyTicketPage(),
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

export default compose(withConnect)(BuyTicketPage);
