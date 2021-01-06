import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
const bannerImage = require('../../assets/home-banner.webp');

export default function HomeBanner() {
  return (
    <div className="header">
      <div className="main-container">
        <Row gutter={[24, 16]} align="middle" className="py-3 home-banner">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Typography className="banner-content">
              <Typography.Title level={1}>Discover a Healthier You</Typography.Title>
              <Divider />
              <Typography.Paragraph>
                Get a personalized nutrition program based on your lifestyle, habits and blood analysis.
              </Typography.Paragraph>
            </Typography>
            <Button>Learn More</Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="banner-img">
            <img src={bannerImage} alt="banner" width="100%" height="auto" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
