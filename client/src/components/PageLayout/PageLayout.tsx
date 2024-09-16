import { Col, Layout, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { FC, ReactNode } from 'react';

const { Header, Content, Footer } = Layout;

interface PageLayout {
  children: ReactNode;
}

const PageLayout: FC<PageLayout> = ({ children }) => {
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
              {children}
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

export default PageLayout;
