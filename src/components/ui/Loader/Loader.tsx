import React, { FC } from 'react'
import { StyledLoader } from './Loader.styles'
import { LoaderProps } from './Loader.types'

export const Loader: FC<LoaderProps> = ({ color }) => {
  return (
    <StyledLoader customColor={color}>
      <div></div>
    </StyledLoader>
  )
}
