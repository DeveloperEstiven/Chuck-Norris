import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Page404 } from './components/Page404'
import { HomePage } from './components/HomePage'
import { GlobalStyle } from './styles/theme/globalStyle'
import { theme } from './styles/theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
