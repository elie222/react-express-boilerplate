import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import MainLayout from './layouts/MainLayout'
import theme from './utils/theme'
import './App.scss'
import Registration from './routes/Registration';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Registration />
        </MainLayout>
      </ThemeProvider>
    )
  }
}

export default App
