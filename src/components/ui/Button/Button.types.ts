import { ReactNode } from 'react'

export type ButtonProps = {
  disabled?: boolean
  children: ReactNode
  onClick: () => void
}
