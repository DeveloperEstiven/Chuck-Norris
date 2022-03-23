import styled from 'styled-components'
import media from '../../../utils/mediaCreator'

export const CategoriesSection = styled.section`
  margin: 0 0 162px 0;
`

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
  ${media.md3} {
    gap: 10px 10px;
  }
`
