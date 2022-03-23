import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 59px;
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  align-items: center;
`
export const HeaderLogo = styled.div`
  cursor: pointer;
  margin-right: 10px;
  img {
    width: 43px;
    height: 43px;
  }
`
export const HeaderInner = styled.div`
  display: flex;
  color: #fff;
  span {
    margin-top: 12px;
  }
`
