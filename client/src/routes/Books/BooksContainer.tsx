import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BooksTable from './BooksTable'

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
            books {
              title
              author
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return <BooksTable books={data.books} />
        }}
      </Query>
    )
  }
}
