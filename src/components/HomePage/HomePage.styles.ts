import styled from 'styled-components'
import media from '../../utils/mediaCreator'

export const Title = styled.h1`
  font-size: 50px;
  line-height: 59px;
  color: ${props => props.theme.colors.text};
  margin: 60px 0 63px;
  text-align: center;

  ${media.md3} {
    font-size: 37px;
    margin: 30px 0 30px;
  }
`
