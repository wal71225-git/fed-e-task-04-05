import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers/index'
import { RouterState } from 'connected-react-router'
function useActive(currentPath: string, pathname: string) {
  return currentPath === pathname ? 'ant-menu-item-selected' : ''
}
const Navigation = () => {
    const router = useSelector<AppState, RouterState>(state => state.router)
    const pathName = router.location.pathname
    const isHome = useActive(pathName, '/')
    const isShop = useActive(pathName, '/Shop')
    const isSignUp = useActive(pathName, '/signup')
    const isSignIn = useActive(pathName, '/signin')
    return (
        <Menu mode="horizontal" selectable={false}>
          <Menu.Item className={isHome}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item className={isShop}>
            <Link to="/Shop">商城</Link>
          </Menu.Item>
          <Menu.Item className={isSignUp}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
          <Menu.Item className={isSignIn}>
            <Link to="/signin">登录</Link>
          </Menu.Item>
        </Menu>
    )
}
export default Navigation