import styled from 'styled-components';

export default styled.span`
  margin-top: 15px;
  display: inline-block;
  padding: 8px 26px;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${props => props.theme.color.main};
  color: ${props => props.theme.color.white};
  transition: 0.25s all;
  &:hover {
    color: ${props => props.theme.color.main};
    background-color: ${props => props.theme.color.white};
  }
`;
