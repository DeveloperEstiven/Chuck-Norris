import React, { FC } from 'react'
import { Button } from '../../ui/Button'
import { CategoriesContainer, CategoriesSection } from './Categories.styles'
import { CategoriesProps } from './Categories.types'

export const Categories: FC<CategoriesProps> = ({ isFetching, categories, onCategoryClick, onRandomClick }) => {
  return (
    <CategoriesSection>
      <CategoriesContainer>
        {categories.map(category => (
          <Button disabled={isFetching} key={category} onClick={onCategoryClick}>
            {category}
          </Button>
        ))}
        <Button disabled={isFetching} onClick={onRandomClick}>
          random
        </Button>
      </CategoriesContainer>
    </CategoriesSection>
  )
}
