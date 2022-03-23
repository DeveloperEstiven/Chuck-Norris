import { useState } from 'react'
import chuckNorrisAPI from '../../api/chuckNorrisAPI/chuckNorrisAPI'
import { IJoke } from '../../api/chuckNorrisAPI/chuckNorrisAPI.types'
import { IInitialState } from './HomePage.types'

const initialState = {
  quote: '',
  categories: [],
  isFetching: false,
  error: null,
  initialLoading: true,
}

export const useHomePageState = () => {
  const [state, setState] = useState<IInitialState>(initialState)

  const stopLoader = () => {
    setState(s => ({
      ...s,
      isFetching: false,
    }))
  }

  const startLoader = () => {
    setState(s => ({
      ...s,
      isFetching: true,
    }))
  }

  const handleError = (error: string) => {
    setState(s => ({
      ...s,
      error,
    }))
  }

  const saveQuote = (res: IJoke) => {
    setState(s => ({
      ...s,
      quote: res.value,
    }))
  }

  const getCategories = () => {
    chuckNorrisAPI
      .getJokesCategories()
      .then(res =>
        setState(s => ({
          ...s,
          categories: res,
        }))
      )
      .catch(err => handleError(err))
      .finally(() =>
        setState(s => ({
          ...s,
          initialLoading: false,
        }))
      )
  }

  const getQuote = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e?.target as HTMLElement
    const category = btn.innerText
    startLoader()
    category &&
      chuckNorrisAPI
        .getJoke(category)
        .then(res => saveQuote(res))
        .catch(err => handleError(err))
        .finally(() => stopLoader())
  }

  const getRandomQuote = () => {
    startLoader()
    chuckNorrisAPI
      .getRandomJoke()
      .then(res => saveQuote(res))
      .catch(err => handleError(err))
      .finally(() => stopLoader())
  }

  return {
    ...state,
    getRandomQuote,
    getQuote,
    getCategories,
  }
}
