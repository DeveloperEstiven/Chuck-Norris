import { JokeCategory } from './../../../api/chuckNorrisAPI/chuckNorrisAPI.types'

export type CategoriesProps = {
  isFetching: boolean
  categories: JokeCategory
  onCategoryClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
  onRandomClick: () => void
}
