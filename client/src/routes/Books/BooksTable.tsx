import * as React from 'react'
import Table from '../../components/Table'

export interface BooksTableProps {
  books: any[]
}

export default class BooksTable extends React.Component<BooksTableProps, any> {
  render() {
    const columns: any[] = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text: string) => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        render: (text: string) => <a href="javascript:;">{text}</a>,
      },
    ]

    const { books } = this.props

    return <Table columns={columns} data={books} rowKey="title" />
  }
}
