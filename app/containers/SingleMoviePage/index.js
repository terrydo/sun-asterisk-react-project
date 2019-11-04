/**
 *
 * SingleMoviePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { generatePath } from 'react-router';
import { withRouter, Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import HeaderContainer from 'containers/HeaderContainer';
import routes from 'app-routes';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { getSingleMovieAction } from './actions';
import * as c from './styled-components';
import makeSelectSingleMoviePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SingleMoviePage({ singleMoviePage, dispatch, match }) {
  useInjectReducer({ key: 'singleMoviePage', reducer });
  useInjectSaga({ key: 'singleMoviePage', saga });

  useEffect(() => {
    dispatch(getSingleMovieAction({ id: match.params.id }));
  }, []);

  const { singleMovie } = singleMoviePage;

  if (!singleMovie) return '';

  return (
    <>
      <Helmet>
        <title>SingleMoviePage</title>
        <meta name="description" content="Description of SingleMoviePage" />
      </Helmet>

      <HeaderContainer isWithoutSlider singleMovie={singleMovie} />

      <c.SingleMoviePage className="container container--pd-left">
        <div className="row">
          <c.SingleMovieMain className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-md-6">
                <c.SingleMovieImageWrap>
                  <c.SingleMovieImage
                    src={
                      process.env.IMAGE_THUMB_HOSTING + singleMovie.poster_path
                    }
                  />
                </c.SingleMovieImageWrap>
              </div>

              <c.SingleMovieInfo className="col-12 col-md-6">
                <c.SingleMovieInfoTitle>
                  {singleMovie.title}
                </c.SingleMovieInfoTitle>

                <c.SingleMovieInfoLine>
                  <strong>Release Date: </strong>
                  {singleMovie.release_date}
                </c.SingleMovieInfoLine>

                <c.SingleMovieInfoLine>
                  <strong>Categories: </strong>
                  Action, Adventure, Fantasy
                </c.SingleMovieInfoLine>

                <c.SingleMovieInfoLine>
                  <strong>Director: </strong>
                  David Ayer
                </c.SingleMovieInfoLine>

                <c.SingleMovieInfoLine>
                  <strong>Actors: </strong>
                  John Doe, John Smith, John Cena
                </c.SingleMovieInfoLine>

                <c.SingleMovieInfoLine>
                  <strong>Language: </strong>
                  {singleMovie.original_language === 'en'
                    ? 'English'
                    : 'Unknown'}
                </c.SingleMovieInfoLine>
              </c.SingleMovieInfo>
            </div>
            <c.SingleMovieSummaryTitle>Plot Summary</c.SingleMovieSummaryTitle>
            <c.SingleMovieSummary>{singleMovie.overview}</c.SingleMovieSummary>

            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                <Link
                  to={generatePath(routes.buyTicket, {
                    movieId: singleMovie.id,
                  })}
                >
                  <c.BuyTicket>12:00</c.BuyTicket>
                </Link>
              </Tab>
            </Tabs>
          </c.SingleMovieMain>
        </div>
      </c.SingleMoviePage>
    </>
  );
}

SingleMoviePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  singleMoviePage: PropTypes.object,
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

export default compose(
  withConnect,
  withRouter,
)(SingleMoviePage);
