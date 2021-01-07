import React from 'react';
import { Button, Card, Col, Divider, Row, Typography } from 'antd';
import AppLayout from '../../layouts/app';
import TTitle from '../../components/title';
import { colors } from '@constants/general';
import { UserAddOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import './work.less';
import { feedbackItms } from '../home/Home';

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
      {renderHowItWorks()}
      {renderServices()}
      {renderHealth()}

      <section className="section" style={{ backgroundColor: colors['primary-color'], marginTop: '3rem' }}>
        <div className="main-container py-3">
          <TTitle level={1} borderColor="#fff" textColor="#fff" className="text-center" dividerWidth="85%">
            WE LET THE RESULTS SPEAK FOR THEMSELVES HERE’S WHAT OUR PAST USERS HAVE TO SAY:
          </TTitle>
          {feedbackItms()}
        </div>
      </section>
    </AppLayout>
  );
}

const renderHowItWorks = () => (
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
    <div className="timeline">
      <ol>
        <li>
          <div className="content">
            <div className="count">1</div>
            <UserAddOutlined />
            <h3>Sign Up</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="count">2</div>
            <UserAddOutlined />
            <h3>Sign Up</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="count">3</div>
            <UserAddOutlined />
            <h3>Sign Up</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="count">4</div>
            <UserAddOutlined />
            <h3>Sign Up</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="count">5</div>
            <UserAddOutlined />
            <h3>Sign Up</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
);

const renderServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="section bg-gray">
      <div className="main-container py-3 hiw-services">
        <TTitle
          level={1}
          borderColor={colors['primary-color']}
          textColor={colors['primary-color']}
          className="text-center"
          dividerWidth="18%"
        >
          SERVICES
        </TTitle>
        <Slider {...settings} className="my-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="service-itm" key={i}>
              <Card
                bordered={false}
                cover={<img alt="example" src="https://source.unsplash.com/random" width="100%" height="300px" />}
              >
                <h3>Family Planning</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const renderHealth = () => (
  <div className="main-container py-3 hiw-health">
    <TTitle
      level={1}
      borderColor={colors['primary-color']}
      textColor={colors['primary-color']}
      className="text-center"
      dividerWidth="28%"
    >
      THE SOVA HEALTH PROMISE
    </TTitle>
    <Row className="my-3">
      <Col lg={8} md={24} sm={24}>
        <div className="healt-card">
          <SafetyCertificateOutlined />
          <h3>Scienc Based</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et</p>
          <div />
        </div>
      </Col>
      <Col lg={8} md={24} sm={24}>
        <div className="healt-card">
          <SafetyCertificateOutlined />
          <h3>Scienc Based</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et </p>
        </div>
      </Col>
      <Col lg={8} md={24} sm={24}>
        <div className="healt-card">
          <SafetyCertificateOutlined />
          <h3>Scienc Based</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et</p>
        </div>
      </Col>
    </Row>
  </div>
);
