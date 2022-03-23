import axios from 'axios'
import { JokeCategory, IJoke } from './chuckNorrisAPI.types'

const baseURL = 'https://api.chucknorris.io/jokes'

const createInstance = () =>
  axios.create({
    baseURL,
  })

const chuckNorrisAPI = {
  getJoke: (category: string) =>
    createInstance()
      .get<IJoke>(`/random?category=${category}`)
      .then(res => res.data),

  getRandomJoke: () =>
    createInstance()
      .get<IJoke>(`/random`)
      .then(res => res.data),

  getJokesCategories: () =>
    createInstance()
      .get<JokeCategory>(`/categories`)
      .then(res => res.data),
}

export default chuckNorrisAPI
