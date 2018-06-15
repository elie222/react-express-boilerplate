import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export interface BooksContainerProps {}

export default class BooksContainer extends React.Component<
  BooksContainerProps,
  any
> {
  render() {
    return (
      <Query
        query={gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.rates.map(
            ({ currency, rate }: { currency: any; rate: any }) => (
              <div key={currency}>
                <p>{`${currency}: ${rate}`}</p>
              </div>
            )
          )
        }}
      </Query>
    )
  }
}
