import React, { FC } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { disabled, children, onClick } = props
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
