import React from 'react';
import { Layout, theme } from 'antd';
import Title from 'antd/es/typography/Title';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', marginBottom: 0 }}>
          Micro Blog
        </Title>
      </Header>
      <Content style={{ padding: '48px 48px 0' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 500,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Micro Blog ©{new Date().getFullYear()} Created by DOM
      </Footer>
    </Layout>
  );
};

export default App;
