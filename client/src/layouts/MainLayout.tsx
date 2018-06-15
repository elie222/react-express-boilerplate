import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import Home from '../routes/Home'
import WrappedRegistrationForm from '../routes/Registration'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Books from '../routes/Books'
import LogIn from '../routes/LogIn'
import SignUp from '../routes/SignUp'
const { Content } = Layout

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Layout>
          <SideBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/books">Books</Link>
                  </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={WrappedRegistrationForm} />
                <Route path="/books" component={Books} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/log-in" component={LogIn} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MainLayout
