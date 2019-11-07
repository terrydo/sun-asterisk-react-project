/* eslint-disable react/no-array-index-key */
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
import { getSeatAction, setServerSelectingSeatAction } from './actions';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

export function BuyTicketPage({ socket, dispatch, match, buyTicketPage }) {
  useInjectReducer({ key: 'buyTicketPage', reducer });
  useInjectSaga({ key: 'buyTicketPage', saga });

  const { seats, serverSelectingSeats, user } = buyTicketPage;
  const { movieId } = match.params;
  const socketRoomId = `ticketRoom${movieId}`;

  const refSeats = React.useRef(null);
  const refUser = React.useRef(null);

  React.useEffect(() => {
    refUser.current = user;
  }, [user]);

  React.useEffect(() => {
    refSeats.current = seats;
  }, [seats]);

  const handleSeatClick = (x, y, userId) => {
    socket.emit('clientSeatChoosing', {
      x,
      y,
      userId,
    });
  };

  React.useEffect(() => {
    console.log('effect ONCE!');

    const handleSelectingSeats = socketSelectingSeats => {
      console.log('run once');
      const currentSeats = refSeats.current;

      if (!currentSeats) return;

      dispatch(setServerSelectingSeatAction(socketSelectingSeats));
    };

    const cleanup = () => {
      socket.off('onJoinTicketBuyingRoom', handleSelectingSeats);
      socket.off('onSeatChoosing', handleSelectingSeats);
    };

    dispatch(getSeatAction({ movieId }));

    socket.on('onJoinTicketBuyingRoom', handleSelectingSeats);
    socket.on('onSeatChoosing', handleSelectingSeats);

    const timeout = setTimeout(() => {
      socket.emit('clientJoinTicketBuyingRoom', socketRoomId);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      cleanup();
    };
  }, []);

  if (!seats || !serverSelectingSeats || !user) {
    return '';
  }

  return (
    <>
      <Helmet>
        <title>BuyTicketPage</title>
        <meta name="description" content="Description of BuyTicketPage" />
      </Helmet>

      <HeaderContainer banner={banner} />

      <c.Theater>
        {seats.map((row, rowIdx) => (
          <c.Row key={`row${rowIdx}`}>
            {row.map((seat, seatIdx) => {
              const seatText = alphabet[rowIdx] + (seatIdx + 1);

              if (seat === null) {
                if (
                  rowIdx in serverSelectingSeats &&
                  seatIdx in serverSelectingSeats[rowIdx]
                ) {
                  // Ghe minh dang chon
                  if (user.id === serverSelectingSeats[rowIdx][seatIdx]) {
                    return (
                      <c.Seat
                        key={`seat${seatIdx}`}
                        onClick={() =>
                          handleSeatClick(rowIdx, seatIdx, user.id)
                        }
                        selecting
                      >
                        {seatText}
                      </c.Seat>
                    );
                  }
                  return (
                    <c.Seat key={`seat${seatIdx}`} otherSelecting>
                      {seatText}
                    </c.Seat>
                  );
                }
                return (
                  <c.Seat
                    key={`seat${seatIdx}`}
                    onClick={() => handleSeatClick(rowIdx, seatIdx, user.id)}
                  >
                    {seatText}
                  </c.Seat>
                );
              }

              return (
                <c.SelectedSeat
                  key={`seat${seatIdx}`}
                  onClick={() => handleSeatClick(rowIdx, seatIdx, user.id)}
                >
                  {seatText}
                </c.SelectedSeat>
              );
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
