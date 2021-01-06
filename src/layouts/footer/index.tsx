import React from 'react';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import {
  PhoneFilled,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
  YoutubeFilled,
  TwitterSquareFilled
} from '@ant-design/icons';

import './footer.less';

export default function Footer() {
  return (
    <section className="main-container" id="footer">
      <Divider className="divider" />
      <Row justify="space-between">
        <Col lg={8} md={24}>
          <h3>Just good content. No spam. Sign up for our newsletter</h3>
          <Form>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your username!', type: 'email' }]}>
              <Input placeholder="Your Email .." />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <ul className="contacts">
            <li>
              <PhoneFilled /> <span>+91 9811 574 691</span>
            </li>
            <li>
              <MailFilled />
              <span>support@sova.health</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={24} className="text-center">
          <ul className="socials-links">
            <li>
              <a href="https://www.facebook.com/SovaNutrition/" target="_blank" rel="noopener noreferrer">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sova_health/" target="_blank" rel="noopener noreferrer">
                <InstagramFilled />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sovahealth" target="_blank" rel="noopener noreferrer">
                <TwitterSquareFilled />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCQACeaXNRC_H3S9KcxWsg3w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeFilled />
              </a>
            </li>
          </ul>
          <p> WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED</p>
        </Col>
      </Row>
    </section>
  );
}
