import React from 'react';
import { Layout } from 'antd';
import '../styles/app.less';
import Footer from './footer';
import MainHeader from './header/header';

export default function AppLayout(props: any) {
  return (
    <Layout className="layout">
      <MainHeader />
      <div style={{ marginTop: '50px' }}>{props.children}</div>
      <Footer />
    </Layout>
  );
}
