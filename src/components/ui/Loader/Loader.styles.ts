import styled from 'styled-components'
import { StyledLoaderProps } from './Loader.types'

export const StyledLoader = styled.div<StyledLoaderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  div {
    position: absolute;
    margin-top: 30px;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid ${props => props.customColor};
    border-right-color: transparent;
    transform-origin: center;
    animation: rotate 1s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
