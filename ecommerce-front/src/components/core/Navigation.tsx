import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Shop">商城222</Link>
          </Menu.Item>
        </Menu>
    )
}
export default Navigation