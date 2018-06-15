import * as React from 'react'
import { Table as TableAntD } from 'antd'

export interface TableProps {
  columns: any[]
  data: any[]
  rowKey: string
}

export default class Table extends React.Component<TableProps, any> {
  render() {
    const { columns, data, rowKey } = this.props

    return <TableAntD columns={columns} dataSource={data} rowKey={rowKey} />
  }
}
