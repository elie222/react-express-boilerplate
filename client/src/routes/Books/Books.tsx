import * as React from 'react';
import Table from '../../components/Table';

export interface BooksProps {
}

export default class Books extends React.Component<BooksProps, any> {
  render() {
    return (
      <div>
        <h1>Books</h1>
        <Table />
      </div>
    );
  }
}
