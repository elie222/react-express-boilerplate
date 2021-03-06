import * as React from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const { Header } = Layout

export interface INavBarProps {}

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`

export default class NavBar extends React.Component<INavBarProps, any> {
  render() {
    return (
      <Header className="header">
        <Logo />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">
            <Link to="/log-in">Log In</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/sign-up">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}
