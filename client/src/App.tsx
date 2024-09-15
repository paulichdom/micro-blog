import React from 'react';
import { Button, Col, Input, Layout, Row, Space, Typography } from 'antd';
import Title from 'antd/es/typography/Title';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Row style={{ marginInlineStart: '25%' }}>
          <Title level={3} style={{ color: 'white', marginBottom: 0 }}>
            Micro Blog
          </Title>
        </Row>
      </Header>
      <Layout>
        <Content style={{ padding: '48px 48px 0', background: 'white' }}>
          <Row>
            <Col span={12} offset={6}>
              <Typography.Title level={5}>Create a post</Typography.Title>
              <Space.Compact>
                <Input />
                <Button type="primary">Create</Button>
              </Space.Compact>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Micro Blog ©{new Date().getFullYear()} Created by DOM
      </Footer>
    </Layout>
  );
};

export default App;
