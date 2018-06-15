import * as React from 'react';
import Table from '../../components/Table';
import BooksContainer from './BooksContainer';

export interface BooksProps {
}

export default class Books extends React.Component<BooksProps, any> {
  render() {
    return (
      <div>
        <h1>Books</h1>
        <h2>Static Table</h2>
        <Table />
        <h2>GraphQL Table</h2>
        <BooksContainer />
        <Table />
      </div>
    );
  }
}
