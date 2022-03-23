import React, { FC } from 'react'
import { StyledPage } from './Page404.styles'
import chuckNorris from '../../assets/img/chuck-norris-img.webp'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router'

export const Page404: FC = () => {
  const navigate = useNavigate()

  const onHomepageClick = () => {
    navigate('/')
  }
  return (
    <StyledPage>
      <img src={chuckNorris} alt='chuck norris' />
      <p>Page Not Found</p>
      <Button onClick={onHomepageClick}>home page</Button>
    </StyledPage>
  )
}
