import styled from 'styled-components';
import wall from 'assets/images/ic-screen.png';
import unselectedSeat from 'assets/images/seat-unselect-normal.png';
import selectedSeat from 'assets/images/seat-select-normal.png';
import selectingSeat from 'assets/images/seat-selecting.png';
import otherSelectingSeat from 'assets/images/seat-other-selecting.png';

export const Theater = styled.div`
  width: 600px;
  position: relative;
  margin: 70px auto;
  font-size: 0;
  text-align: center;
`;

export const TheaterWall = styled.img.attrs({
  src: wall,
})`
  max-width: 100%;
`;

export const Seat = styled.span`
  display: inline-block;
  width: 50px;
  height: 35px;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  line-height: 35px;
  text-indent: -12px;
  color: ${p => p.theme.color.white};
  user-select: none;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${unselectedSeat}) no-repeat;
    background-size: contain;
    z-index: -1;
  }

  ${({ selecting }) =>
    selecting &&
    `
      &:before {
        background-image: url(${selectingSeat});
      }
  `};

  ${({ otherSelecting }) =>
    otherSelecting &&
    `
      &:before {
        background-image: url(${otherSelectingSeat});
      }
  `};
`;

export const SelectedSeat = styled(Seat)`
  &:before {
    background-image: url(${selectedSeat});
  }
`;

export const Row = styled.div`
  margin-bottom: 20px;
  white-space: nowrap;
`;
