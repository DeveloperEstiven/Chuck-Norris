const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`
const mediaQueryMobile = (minWidth: number) => `@media (min-width: ${minWidth}px)`

const media = {
  md: mediaQuery,
  mmd: mediaQueryMobile,

  md1: mediaQuery(1191),
  mmd1: mediaQueryMobile(1191),

  md2: mediaQuery(991),
  mmd2: mediaQueryMobile(991),

  md3: mediaQuery(767),
  mmd3: mediaQueryMobile(767),

  md4: mediaQuery(480),
  mmd4: mediaQueryMobile(480),
}

export default media
