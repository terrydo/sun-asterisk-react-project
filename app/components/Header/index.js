import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { RenderedNavbar } from './Navbar';

const Header = styled.header`
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

export function RenderedHeader(props){
  return (
    <Header>
      <HeaderBackground backgroundImage={props.backgroundImage}/>
      <div className="container">
        <RenderedNavbar />
      </div>
    </Header>
  );
}

RenderedHeader.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Header;
