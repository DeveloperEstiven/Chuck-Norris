import React, { FC } from 'react'
import { QuoteWrapper, StyledQuote } from './Quote.styles'
import { QuoteProps } from './Quote.types'
import chuckNorris from '../../../assets/img/chuck-norris-img.webp'
import { Loader } from '../../ui/Loader'

export const Quote: FC<QuoteProps> = ({ quote, isFetching }) => {
  return (
    <QuoteWrapper>
      <img src={chuckNorris} alt='chuck-norris' />
      <StyledQuote>{isFetching ? <Loader color='#fff' /> : <p>{quote}</p>}</StyledQuote>
    </QuoteWrapper>
  )
}
