import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import MainLayout from './layouts/MainLayout'
import client from './utils/apollo'
import theme from './utils/theme'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <MainLayout />
          </ThemeProvider>
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
