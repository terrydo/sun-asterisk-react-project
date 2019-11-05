import styled from 'styled-components';
import wall from 'assets/images/ic-screen.png';

export const Theater = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
`;

export const TheaterWall = styled.img.attrs({
  src: wall,
})`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
`;
