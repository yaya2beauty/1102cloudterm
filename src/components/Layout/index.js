import React from 'react';
import { Layout } from 'antd';
import Header from './header';
const { Content } = Layout;
const LayoutWithRoute = ({ children }) => {
  return (
    <Layout hasSider style={{ minHeight: '100vh'}}>
      <Header/>
      <Layout  style={{background:'#fff'  }}>
        <Content style={{paddingLeft:'200px', overflow: 'initial' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;