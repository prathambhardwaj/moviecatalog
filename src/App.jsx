import { Layout } from "antd";
import {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle,
} from "./styles/layout.style";
import Home from "./components/Home";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Home />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
