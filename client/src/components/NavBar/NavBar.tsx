import * as React from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout

export interface INavBarProps {}

export default class NavBar extends React.Component<INavBarProps, any> {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}
