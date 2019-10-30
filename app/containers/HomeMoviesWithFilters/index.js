/* eslint-disable prettier/prettier */
/**
 *
 * HomeMoviesWithFilters
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
import searchIcon from 'assets/images/icon-search.png';
import makeSelectHomeMoviesWithFilters from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchingMoviesAction } from './actions';

const FilterWrapper = styled.div`
  background-color: #faf4f4;
  padding-top: 150px;
  text-align: center;
`;

const FilterGroup = styled.div`
  display: inline-block;
`;

const Filter = styled.span`
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  color: ${props => props.theme.color.textGrey};
  &:hover {
    color: ${props => props.theme.color.main};
  }
`;

const SearchGroup = styled.input`
  width: 100%;
  max-width: 450px;
  height: 50px;
  border-radius: 100px;
  border: 1px solid ${props => props.theme.color.white};
  background: ${props => props.theme.color.pureWhite};
  transform: translateY(50%);
  box-shadow: 0 0 8px 0 #eaeaea;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 95% center;
  padding: 5px 25px;

  &::placeholder {
    color: ${props => props.theme.color.main};
    font-weight: 700;
  }
`;

const HomeMovies = styled.div`
  margin-top: 80px;
`;

const HomeMovie = styled.div``;

const HomeMovieTitle = styled.h3``;

const HomeMovieImage = styled.div``;

const renderHomeMovieList = homeMovies => {
  if (!homeMovies) return '';

  return homeMovies.map(homeMovie => (
    <div className="col-12 col-md-4 col-lg-3" key={homeMovie.id}>
      <HomeMovie>
        <HomeMovieImage>
          <a href="#">
            <img
              src={
                process.env.IMAGE_THUMB_HOSTING +
                  homeMovie.poster_path
              }
              alt={homeMovie.title}
            />
          </a>
        </HomeMovieImage>
        <HomeMovieTitle as="a" href="#">
          {homeMovie.title}
        </HomeMovieTitle>
      </HomeMovie>
    </div>
  ))
}

export function HomeMoviesWithFilters({ homeMoviesWithFilters, getHomeMovie }) {
  useInjectReducer({ key: 'homeMoviesWithFilters', reducer });
  useInjectSaga({ key: 'homeMoviesWithFilters', saga });

  const { homeMovies } = getHomeMovie();

  homeMovies.length = 4;

  return (
    <>
      <FilterWrapper>
        <div className="container">
          <FilterGroup>
            <Filter>All</Filter>
            <Filter>Latest</Filter>
            <Filter>Coming Soon</Filter>
            <Filter>Top rated</Filter>
            <SearchGroup placeholder="Search ..." />
          </FilterGroup>
        </div>
      </FilterWrapper>

      <HomeMovies className="container">
        <div className="row">
          {renderHomeMovieList(homeMovies)}
        </div>
      </HomeMovies>
    </>
  );
}

HomeMoviesWithFilters.propTypes = {
  getHomeMovie: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeMoviesWithFilters: makeSelectHomeMoviesWithFilters(),
});

function mapDispatchToProps(dispatch) {
  return {
    getHomeMovie: () => dispatch(fetchingMoviesAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomeMoviesWithFilters);