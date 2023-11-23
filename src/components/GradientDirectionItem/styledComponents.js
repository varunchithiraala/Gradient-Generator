// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  outline: none;
  cursor: pointer;
`
