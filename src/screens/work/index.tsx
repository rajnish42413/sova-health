import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import AppLayout from '../../layouts/app';
import TTitle from '../../components/title';
import './work.less';
import { colors } from '@constants/general';

const bannerImage = require('../../assets/hiw_banner.webp');

export default function HowWorks() {
  return (
    <AppLayout>
      <section className="section" style={{ backgroundColor: '#EBEFEF' }}>
        <div className="main-container">
          <Row gutter={[24, 16]} align="middle" className="hiw-banner">
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Typography className="banner-content">
                <Typography.Title level={1}>Discover a Healthier You</Typography.Title>
                <Divider />
                <Typography.Paragraph>
                  At home collection of blood sample & analysis for 60+ parameters. Based on your health reports, our
                  nutritionists will guide you with nutritional & lifestyle advice.
                </Typography.Paragraph>
              </Typography>
              <Button type="primary" size="large">
                View Our Plan
              </Button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="banner-img">
              <img src={bannerImage} alt="banner" width="100%" height="auto" />
            </Col>
          </Row>
        </div>
      </section>
      <section className="main-container py-3">
        <TTitle
          level={1}
          borderColor={colors['primary-color']}
          textColor={colors['primary-color']}
          className="text-center"
          dividerWidth="35%"
        >
          HOW DOES IT WORK?
        </TTitle>
      </section>
    </AppLayout>
  );
}
