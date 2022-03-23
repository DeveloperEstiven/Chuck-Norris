import styled from 'styled-components'
import media from '../../utils/mediaCreator'

export const Container = styled.div`
  max-width: ${props => props.theme.maxWidthContainer};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${media.md1} {
    max-width: 970px;
  }
  ${media.md2} {
    max-width: 750px;
  }
  ${media.md3} {
    max-width: none;
    padding: 0 10px;
  }
`
