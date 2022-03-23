import styled from 'styled-components'

export const QuoteWrapper = styled.div`
  position: relative;
  img {
    width: 122px;
    height: 258px;
    z-index: -1;
    position: absolute;
    top: -153px;
    right: 24px;
  }
`

export const StyledQuote = styled.div`
  min-height: 162px;
  background-color: ${props => props.theme.colors.bg};
  padding: 24px;
  border-radius: 25px;
  p {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
  }
  margin-bottom: 50px;
`
