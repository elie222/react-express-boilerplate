import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import MainLayout from './layouts/MainLayout'
import client from './utils/apollo'
import theme from './utils/theme'
import './App.scss'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <MainLayout />
            </ThemeProvider>
          </ApolloProvider>
        </Router>
      </Provider>
    )
  }
}

export default App
