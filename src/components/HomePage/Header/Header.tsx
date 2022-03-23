import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { Container } from '../../ui/Container'
import { HeaderInner, HeaderLogo, StyledHeader } from './Header.styles'

export const Header: FC = () => {
  const navigate = useNavigate()

  const onLogoClick = () => {
    navigate('/')
  }

  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <HeaderLogo onClick={onLogoClick}>
            <img src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' alt='logo' />
          </HeaderLogo>
          <span>Chuck Norris</span>
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
}
