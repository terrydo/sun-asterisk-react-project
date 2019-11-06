/**
 *
 * BuyTicketPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withAuthenticate from 'withAuthenticate';

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
import { getSeatAction } from './actions';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

export function BuyTicketPage({ socket, dispatch, match, buyTicketPage }) {
  useInjectReducer({ key: 'buyTicketPage', reducer });
  useInjectSaga({ key: 'buyTicketPage', saga });

  useEffect(() => {
    const { movieId } = match.params;

    dispatch(getSeatAction({ movieId }));
  }, []);

  socket.on('welcome', response => {
    console.log(response);
  });

  const { seats } = buyTicketPage;

  if (!seats) return '';

  return (
    <>
      <Helmet>
        <title>BuyTicketPage</title>
        <meta name="description" content="Description of BuyTicketPage" />
      </Helmet>

      <HeaderContainer banner={banner} />

      <c.Theater>
        {/* <c.TheaterWall /> */}

        {seats.map((row, rowIdx) => (
          <c.Row>
            {row.map((seat, seatIdx) => {
              const seatText = alphabet[rowIdx] + (seatIdx + 1);

              if (seat === null) {
                return <c.Seat>{seatText}</c.Seat>;
              }

              return <c.SelectedSeat>{seatText}</c.SelectedSeat>;
            })}
          </c.Row>
        ))}
      </c.Theater>

      <FooterContainer />
    </>
  );
}

BuyTicketPage.propTypes = {
  socket: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.object,
  buyTicketPage: PropTypes.object,
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
  withRouter,
  withAuthenticate,
)(BuyTicketPage);
