/**
 *
 * HomeMoviesRecommended
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import Slider from 'react-slick';
import makeSelectHomeMoviesRecommended from './selectors';
import reducer from './reducer';
import saga from './saga';

const HomeMovieRecommended = styled.div`
  margin-top: 120px;
`;

const HomeMovieRecommendedTitle = styled.h2`
  color: ${props => props.theme.color.main};
  font-weight: 700;
  margin-bottom: 70px;
`;

const HomeMovieRecommendedList = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

const HomeMovieRecommendedItem = styled.div`
  padding: 0 15px;
`;

const HomeMovieRecommendedImage = styled.img`
  border-radius: 12px;
  box-shadow: 0 12px 8px -5px #666;
`;

export function HomeMoviesRecommended({ homeMoviesRecommended }) {
  const { recommendedMovies } = homeMoviesRecommended;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };

  useInjectReducer({ key: 'homeMoviesRecommended', reducer });
  useInjectSaga({ key: 'homeMoviesRecommended', saga });

  if (!recommendedMovies) return '';

  return (
    <HomeMovieRecommended className="container">
      <HomeMovieRecommendedTitle>Recommended</HomeMovieRecommendedTitle>
      <HomeMovieRecommendedList>
        <Slider {...settings}>
          {recommendedMovies.map(movie => (
            <HomeMovieRecommendedItem key={movie.id}>
              <HomeMovieRecommendedImage
                src={process.env.IMAGE_THUMB_HOSTING + movie.poster_path}
              />
            </HomeMovieRecommendedItem>
          ))}
        </Slider>
      </HomeMovieRecommendedList>
    </HomeMovieRecommended>
  );
}

HomeMoviesRecommended.propTypes = {
  homeMoviesRecommended: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homeMoviesRecommended: makeSelectHomeMoviesRecommended(),
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

export default compose(withConnect)(HomeMoviesRecommended);
