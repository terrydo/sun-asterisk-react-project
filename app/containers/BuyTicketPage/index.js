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
import withSocket from 'withSocket';
import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import banner from 'assets/images/banner.jpg';
import makeSelectBuyTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as c from './styled-components';

export function BuyTicketPage({ socket }) {
  useInjectReducer({ key: 'buyTicketPage', reducer });
  useInjectSaga({ key: 'buyTicketPage', saga });

  socket.on('welcome', response => {
    console.log(response);
  });

  return (
    <>
      <Helmet>
        <title>BuyTicketPage</title>
        <meta name="description" content="Description of BuyTicketPage" />
      </Helmet>

      <HeaderContainer banner={banner} />

      <c.Theater>
        <c.TheaterWall />
      </c.Theater>

      <FooterContainer />
    </>
  );
}

BuyTicketPage.propTypes = {
  socket: PropTypes.object,
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

export default compose(
  withConnect,
  withSocket,
)(BuyTicketPage);
