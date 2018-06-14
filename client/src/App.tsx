import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import MainLayout from './layouts/MainLayout'
import theme from './utils/theme'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    )
  }
}

export default App
