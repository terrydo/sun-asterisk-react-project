/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import LogoUrl from 'assets/images/logo.png';
import routes from 'app-routes';
import PropTypes from 'prop-types';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  color: ${props => props.theme.color.white};
`;

const Ul = styled.ul`
  display: inline-block;
  margin-left: 40px;
`;

const Li = styled.li`
  display: inline-block;
  vertical-align: middle;
  padding: 18px 14px;
`;

const Link = styled.a`
  display: inline-block;
  color: inherit;
  transition: 0.25s color;
  text-transform: uppercase;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.main};
  }
`;

const Logo = styled.img`
  display: inline-block;
`;

export default Navbar;

export function RenderedNavbar({ isLogin }) {
  return (
    <Navbar>
      <Logo src={LogoUrl} />
      <Ul className="pl-0">
        <Li>
          <Link href={routes.home}>Home</Link>
        </Li>
        <Li>
          <Link href="#">Categories</Link>
        </Li>
        <Li>
          <Link href="#">Recommended</Link>
        </Li>
        <Li>
          <Link href="#">News</Link>
        </Li>
        <Li>
          <Link href="#">Gallery</Link>
        </Li>

        {isLogin ? (
          <>
            <Li>
              <Link href={routes.profile}>Profile</Link>
            </Li>

            <Li>
              <Link href={routes.logout}>Logout</Link>
            </Li>
          </>
        ) : (
          <Li>
            <Link href={routes.login}>Login</Link>
          </Li>
        )}
      </Ul>
    </Navbar>
  );
}

RenderedNavbar.propTypes = {
  isLogin: PropTypes.bool,
};
