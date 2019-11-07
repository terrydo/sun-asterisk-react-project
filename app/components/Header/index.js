/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { generatePath } from 'react-router';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import routes from 'app-routes';
import { RenderedNavbar } from './Navbar';

export const Header = styled.header`
  position: relative;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-top: 37%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.backgroundImage});
`;

export const SlideTitle = styled.strong`
  display: block;
  font-size: 32px;
  margin-bottom: 25px;
`;

export const SlideGenre = styled.small`
  display: inline-block;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin-right: 20px;
`;

export const WatchMe = styled.span`
  margin-top: 15px;
  display: inline-block;
  padding: 8px 26px;
  border-radius: 30px;
  background-color: ${props => props.theme.color.main};
  color: ${props => props.theme.color.white};
  &:hover {
    color: ${props => props.theme.color.main};
    background-color: ${props => props.theme.color.white};
  }
`;

export const CarouselIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(50%);
`;

export const CarouselIndicatorItem = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CarouselIndicatorMovieName = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
  color: ${props => props.theme.color.pureWhite};
`;

const calcHeight =
  window.innerHeight * 0.625 > 500 ? window.innerHeight * 0.625 : 500;

function renderMovies(movies) {
  return movies.map(movie => (
    <Carousel.Item key={movie.id} style={{ height: calcHeight }}>
      <img
        className="d-block w-100"
        src={process.env.IMAGE_HOSTING + movie.backdrop_path}
        alt="First slide"
      />
      <Carousel.Caption
        className="container"
        style={{
          left: 0,
          right: 0,
          textAlign: 'left',
          bottom: 'auto',
          top: '30%',
        }}
      >
        <SlideTitle>{movie.title}</SlideTitle>
        <p>
          {movie.genres.map(genre => (
            <SlideGenre key={genre.id}>{genre.name}</SlideGenre>
          ))}
        </p>

        <Link to={generatePath(routes.singleMovie, { id: movie.id })}>
          <WatchMe>Watch Me</WatchMe>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  ));
}

function renderMovie(movie) {
  return (
    <div style={{ height: calcHeight }}>
      <img
        className="d-block w-100"
        src={process.env.IMAGE_HOSTING + movie.backdrop_path}
        alt="First slide"
      />
      <div
        className="container"
        style={{
          left: 0,
          right: 0,
          textAlign: 'left',
          bottom: 'auto',
          top: '30%',
        }}
      >
        <SlideTitle>{movie.title}</SlideTitle>

        <Link to={generatePath(routes.singleMovie, { id: movie.id })}>
          <WatchMe>Watch Me</WatchMe>
        </Link>
      </div>
    </div>
  );
}

function renderIndicators(movies, setCurrentSlide) {
  return (
    <CarouselIndicator>
      <div className="container">
        <div className="row">
          {movies.map((movie, idx) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={movie.id}
              className="col col-md-4"
              onClick={() => setCurrentSlide(idx)}
            >
              <CarouselIndicatorItem>
                <img
                  src={process.env.IMAGE_THUMB_HOSTING + movie.backdrop_path}
                  alt={movie.title}
                  className="rounded"
                />
                <CarouselIndicatorMovieName>
                  {movie.title}
                </CarouselIndicatorMovieName>
              </CarouselIndicatorItem>
            </div>
          ))}
        </div>
      </div>
    </CarouselIndicator>
  );
}

export function RenderedHeader({ movies, isLogin }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  if (!movies) return '';

  const featuredMovies = movies.slice(0, 3);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Header>
      <div style={{ position: 'relative' }}>
        <Carousel
          controls={false}
          indicators={false}
          direction={direction}
          onSelect={handleSelect}
          activeIndex={index}
        >
          {renderMovies(featuredMovies)}
        </Carousel>
        {renderIndicators(featuredMovies, setIndex)}
      </div>
      <div className="container">
        <RenderedNavbar isLogin={isLogin} />
      </div>
    </Header>
  );
}

export function RenderedHeaderWithoutSlider({ movie, isLogin }) {
  return (
    <Header>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {renderMovie(movie)}
      </div>
      <div className="container">
        <RenderedNavbar isLogin={isLogin} />
      </div>
    </Header>
  );
}

export function RenderedHeaderWithBanner({ banner, isLogin }) {
  return (
    <Header>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingTop: '35%',
        }}
      >
        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
          <img
            src={banner}
            alt="Banner"
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
      <div className="container">
        <RenderedNavbar isLogin={isLogin} />
      </div>
    </Header>
  );
}

RenderedHeader.propTypes = {
  movies: PropTypes.array,
  isLogin: PropTypes.bool,
};

RenderedHeaderWithoutSlider.propTypes = {
  movie: PropTypes.object,
  isLogin: PropTypes.bool,
};

RenderedHeaderWithBanner.propTypes = {
  banner: PropTypes.string,
  isLogin: PropTypes.bool,
};

export default Header;
