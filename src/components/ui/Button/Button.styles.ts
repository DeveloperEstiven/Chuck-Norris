import styled from 'styled-components'
import media from '../../../utils/mediaCreator'

export const StyledButton = styled.button`
  position: relative;
  border: none;
  font-size: 16px;
  transition: color 0.3s, transform 0.2s, background-color 0.2s;
  border-radius: 20px;
  text-overflow: ellipsis;
  width: 170px;
  z-index: 1;
  color: ${props => props.theme.colors.text};
  line-height: 19px;
  background-color: #fff;
  overflow: hidden;
  padding: 19px 0;
  box-shadow: 0px 22px 80px rgba(72, 70, 106, 0.07), 0px 2.75474px 10.0172px rgba(72, 70, 106, 0.035);
  font-weight: 800;
  text-transform: lowercase;

  ${media.md3} {
    width: 100px;
  }
  &:hover {
    color: white;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, border 0.3s;
  }
  &:hover::before {
    opacity: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.colors.bg};
    border-color: transparent;
    border-radius: 50%;
    transform: translate(-15px, -70px) scale(0.1);
    opacity: 0;
    z-index: -1;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
  &:hover::after {
    opacity: 1;
    transform-origin: 100px 100px;
    transform: scale(1) translate(-10px, -70px);
  }
`
