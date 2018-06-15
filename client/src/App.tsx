import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import MainLayout from './layouts/MainLayout'
import client from './utils/apollo'
import theme from './utils/theme'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
