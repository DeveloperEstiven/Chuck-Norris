import React, { FC, useEffect } from 'react'

import { Container } from '../ui/Container'
import { Loader } from '../ui/Loader'
import { Categories } from './Categories'
import { Header } from './Header'
import { useHomePageState } from './HomePage.state'
import { Title } from './HomePage.styles'
import { Quote } from './Quote'

export const HomePage: FC = () => {
  const { getRandomQuote, getQuote, getCategories, error, initialLoading, categories, isFetching, quote } =
    useHomePageState()

  useEffect(() => {
    document.body.style.overflowY = 'scroll'
    getCategories()
    getRandomQuote()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Container>
        {error && <Title>Error. Something went wrong!</Title>}
        {!error && (
          <>
            <Title>Categories</Title>
            {initialLoading && <Loader color='#000' />}
            {!initialLoading && (
              <Categories
                isFetching={isFetching}
                categories={categories}
                onCategoryClick={getQuote}
                onRandomClick={getRandomQuote}
              />
            )}
            {!initialLoading && <Quote quote={quote} isFetching={isFetching} />}
          </>
        )}
      </Container>
    </>
  )
}
