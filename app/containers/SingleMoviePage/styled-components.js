import styled from 'styled-components';

export const SingleMoviePage = styled.div`
  margin-top: 70px;
`;

export const SingleMovieMain = styled.main`
  color: ${props => props.theme.color.textGrey};
`;

export const SingleMovieInfo = styled.div``;

export const SingleMovieInfoTitle = styled.strong`
  display: block;
  color: ${props => props.theme.color.black};
  font-size: 27px;
  margin-bottom: 10px;
`;

export const SingleMovieInfoLine = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const SingleMovieImageWrap = styled.div`
  max-width: 250px;
  position: relative;
`;

export const SingleMovieImage = styled.img`
  position: absolute;
  left: 0;
  top: -70px;
  transform: translateY(-50%);
  border-radius: 15px;
`;

export const SingleMovieSummaryTitle = styled.h2`
  color: ${p => p.theme.color.black};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
`;

export const SingleMovieSummary = styled.p`
  line-height: 1.5;
`;

export const TabContent = styled.div`
  margin-top: 25px;
`;

export const BuyTicket = styled.span`
  display: inline-block;
  padding: 4px 40px;
  border: none;
  cursor: pointer;
  color: #333;
  background-color: #e5e5e5;
  transition: 0.5s background-color;
  &:hover {
    background-color: #cccccc;
  }
`;
