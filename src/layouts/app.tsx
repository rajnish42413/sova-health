import React from 'react';
import { Layout } from 'antd';
import '../styles/app.less';
import HomeBanner from '../screens/home/Banner';
import Footer from './footer';
import MainHeader from './header/header';

export default function AppLayout(props: any) {
  return (
    <Layout className="layout">
      <MainHeader />
      <HomeBanner />
      {props.children}
      <Footer />
    </Layout>
  );
}
