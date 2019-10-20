import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
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

export const WatchMe = styled.a`
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

const calcHeight = window.innerHeight * 0.625;

function renderMovies(movies) {
  const featuredMovies = movies.slice(0, 3);

  return featuredMovies.map(movie => (
    <Carousel.Item style={{ height: calcHeight }}>
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
            <SlideGenre>{genre.name}</SlideGenre>
          ))}
        </p>

        <Link
          prefetch
          href={routes.movieSingle ? routes.movieSingle : '#'}
          passHref
        >
          <WatchMe href="">Watch Me</WatchMe>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  ));
}

export function RenderedHeader({ movies }) {
  if (!movies) return '';

  return (
    <Header>
      <Carousel controls={false}>{renderMovies(movies)}</Carousel>
      <div className="container">
        <RenderedNavbar />
      </div>
    </Header>
  );
}

RenderedHeader.propTypes = {
  movies: PropTypes.array,
};

export default Header;
