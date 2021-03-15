import React from 'react'
import Layout from './Layout'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
      <Layout>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Shop">商城</Link>
          </Menu.Item>
        </Menu>
      </Layout>
    )
}
export default Navigation