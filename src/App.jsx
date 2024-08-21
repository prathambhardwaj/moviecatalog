import { Layout } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle,
} from './styles/layout.style'
import MovieHeader from './components/Header'
import { useState } from 'react'
const { Header, Footer, Content } = Layout

function App() {
  const [selectedKeys, setSelectedKeys] = useState('home')
  const navigate = useNavigate()

  const onTabClick = (tabDetails) => {
    const { key } = tabDetails
    setSelectedKeys(key)
    navigate(key)
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <MovieHeader selectedKeys={selectedKeys} onTabClick={onTabClick} />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  )
}

export default App
