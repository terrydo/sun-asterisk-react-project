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

import { throttle } from 'lodash';

import { Link, generatePath } from 'react-router-dom';

import routes from 'app-routes';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import searchIcon from 'assets/images/icon-search.png';
import Button from 'components/Button';
import defaultPoster from 'assets/images/no-poster.jpg';
import makeSelectHomeMoviesWithFilters from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchMoviesAction, filterMoviesAction } from './actions';

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

const SearchGroup = styled.input.attrs({
  type: 'text',
})`
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

const HomeMovieTitle = styled.h3`
  margin-top: 7px;
  color: ${props => props.theme.color.black};
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`;

const HomeMovieImageWrap = styled.div`
  position: relative;
  display: block;
  padding-top: 125%;
  overflow: hidden;
  border-radius: 15px;
`;

const HomeMovieImage = styled.img`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  left: 0;
  top: 0;
`;

const renderHomeMovieList = homeMovies => {
  if (!homeMovies) return '';

  return homeMovies.map(homeMovie => (
    <div className="col-12 col-md-4 col-lg-3 mb-5" key={homeMovie.id}>
      <HomeMovie>
        <HomeMovieImageWrap>
          <Link to={generatePath(routes.singleMovie, { id: homeMovie.id })}>
            <HomeMovieImage
              src={
                homeMovie.poster_path
                  ? process.env.IMAGE_THUMB_HOSTING + homeMovie.poster_path
                  : defaultPoster
              }
              alt={homeMovie.title}
            />
          </Link>
        </HomeMovieImageWrap>
        <HomeMovieTitle as="span">
          <Link to={generatePath(routes.singleMovie, { id: homeMovie.id })}>
            {homeMovie.title}
          </Link>
        </HomeMovieTitle>
      </HomeMovie>
    </div>
  ));
};

export function HomeMoviesWithFilters({
  homeMoviesWithFilters,
  searchMoviesDispatch,
  filterMoviesDispatch,
}) {
  useInjectReducer({ key: 'homeMoviesWithFilters', reducer });
  useInjectSaga({ key: 'homeMoviesWithFilters', saga });

  const [page, setPage] = React.useState(1);
  const [lastAction, setLastAction] = React.useState('filter');
  const [searchValue, setSearchValue] = React.useState('');
  const [currentType, setCurrentType] = React.useState(0);

  const { homeMovies } = homeMoviesWithFilters;

  const searchChange = throttle(value => {
    if (value === '') return;

    if (lastAction !== 'search') {
      setPage(1);
    }

    setSearchValue(value);
    setLastAction('search');

    const payload = {
      search: value,
      page,
    };

    console.log(payload);

    searchMoviesDispatch(payload);
  }, 1000);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    switch (lastAction) {
      case 'search':
        searchMoviesDispatch({
          search: searchValue,
          page: nextPage,
          append: true,
        });
        break;
      default:
        filterMoviesDispatch({
          type: currentType,
          page: nextPage,
          append: true,
        });
        break;
    }
  };

  const handleSearchChange = e => {
    e.persist();

    const value = e.target && e.target.value ? e.target.value : '';
    searchChange(value);
  };

  const filterMovie = type => {
    if (lastAction !== 'filter') {
      setPage(1);
    }

    setCurrentType(type);
    setLastAction('filter');
    filterMoviesDispatch({
      type,
      page: 1,
    });
  };

  return (
    <>
      <FilterWrapper>
        <div className="container">
          <FilterGroup>
            <Filter onClick={() => filterMovie(0)}>All</Filter>
            <Filter onClick={() => filterMovie(1)}>Latest</Filter>
            <Filter onClick={() => filterMovie(2)}>Coming Soon</Filter>
            <Filter onClick={() => filterMovie(3)}>Top rated</Filter>
            <SearchGroup
              onChange={handleSearchChange}
              placeholder="Search ..."
              className="form-control"
            />
          </FilterGroup>
        </div>
      </FilterWrapper>

      <HomeMovies className="container">
        <div className="row">{renderHomeMovieList(homeMovies)}</div>

        <div className="text-center">
          <Button onClick={loadMore}>View more</Button>
        </div>
      </HomeMovies>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  homeMoviesWithFilters: makeSelectHomeMoviesWithFilters(),
});

HomeMoviesWithFilters.propTypes = {
  homeMoviesWithFilters: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  searchMoviesDispatch: PropTypes.func,
  filterMoviesDispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    searchMoviesDispatch: payload => dispatch(searchMoviesAction(payload)),
    filterMoviesDispatch: payload => dispatch(filterMoviesAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomeMoviesWithFilters);
