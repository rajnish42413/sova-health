import React, { useEffect, useState } from 'react';
import AppLayout from '../../layouts/app';
import TTitle from '../../components/title';
import { colors } from '../../constants/general';
import { CloseOutlined, GitlabOutlined } from '@ant-design/icons';
import './Home.less';
import {  Card, Carousel, Col, Row } from 'antd';
import { feedbacks } from "../../constants/feedbacks.json";
import { seenIns } from "../../constants/seenIn.json";
import Axios from 'axios';
import Loader from '../../components/Loader/index';
import HomeBanner from './Banner';

type Props = {};

const Home: React.FC<Props> = () => {
  const [fetching, setFetching] = useState(true);
  const [services, setServices] = useState([] as Array<IService>);

  const getData = async() =>{
    setFetching(true);
    try {
     const { data } = await Axios(`services`);
     setServices(data);
     setFetching(false);
    } catch (error) {
     setFetching(false);
    }
 }

  useEffect(() => {
    getData()
  },[]);

  return (
      fetching ? <Loader /> :    
      <AppLayout>
      <HomeBanner />

      {renderWorkRelation()}
      <section>
        <div className="services main-container">
          <TTitle
            level={1}
            borderColor={colors['primary-color']}
            textColor={colors['primary-color']}
            className="text-center"
            dividerWidth="79%"
          >
            WE HELP YOU ACHIEVE YOUR HEALTH GOALS
          </TTitle>
          <Row className="py-3" gutter={[48, 16]}>
            {services?.map(service => <Col md={24} lg={8} className="service-col">
              <Card hoverable className="service-card"  >
                <p><GitlabOutlined /></p>
                <h3>{service?.title}</h3>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </Card>
            </Col>)}
          </Row>
        </div>
      </section>
      <section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe width="660" height="350" src="https://www.youtube.com/embed/-3O3TVzbEJ8" title="sova healt"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
      </section>
      {/* <section className="main-container py-3">
        <TTitle
          level={1}
          borderColor={colors['primary-color']}
          textColor={colors['primary-color']}
          className="text-center"
          dividerWidth="25%"
        >
          HOW IT WORKS?
          </TTitle>
     
      </section> */}
      {renderFeedbacks()}
      {renderPartners()}
      {renderSeeIn()}
    </AppLayout>
  );
};

export default Home;

const renderWorkRelation = () => (
  <section className="section bg-gray">
    <div className="py-3 main-container">
      <TTitle
        level={1}
        borderColor={colors['primary-color']}
        textColor={colors['primary-color']}
        className="text-center"
        dividerWidth="79%"
      >
        REDEFINE YOUR RELATIONSHIP WITH FOOD
    </TTitle>
      <Row className="food-relation-box">
        <Col xs={24} sm={24} md={24} lg={8}>
          <div className="content">
            <CloseOutlined /> No Diet Charts
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <div className="content">
            <CloseOutlined /> No Restrictive Diets
            </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <div className="content">
            <CloseOutlined /> No Staying Hungry
          </div>
        </Col>
      </Row>
    </div>
  </section>
);


const renderFeedbacks = () => (
  <section className="py-3 main-container">
    <TTitle
      level={1}
      borderColor={colors['primary-color']}
      textColor={colors['primary-color']}
      className="text-center"
      dividerWidth="49%"
    >
      WHAT OUR CUSTOMERS SAY
  </TTitle>
    <Carousel autoplay effect="scrollx" dots={true} arrows={true} style={{ marginTop: '3rem' }}>
      {feedbacks?.map(feedback =>
        <section key={feedback.id} className="bg-gray">
          <div className="feedback-item">
            <img src={feedback?.image} alt="feedback" />
            <div className="profile">
              <p>{feedback?.message}</p>
              <h3>-{feedback?.name}</h3>
            </div>
          </div>
        </section>)}
    </Carousel>
  </section>
)


const renderPartners = () => (
  <section className="py-3 main-container">
    <TTitle
      level={1}
      borderColor={colors['primary-color']}
      textColor={colors['primary-color']}
      className="text-center"
      dividerWidth="29%"
    >
      OUR PARTNERS
   </TTitle>
    <div className="my-3" style={{width:'100%'}}>
      <img 
        src="https://static.wixstatic.com/media/9d3b92_e1d9d90c304c4ef999d674989bf1eaff~mv2.png/v1/fill/w_875,h_260,al_c,q_85,usm_0.66_1.00_0.01/partners.webp" 
        alt="partners" 
         width="100%"
         height="auto"
        />
    </div>
  </section>
)


const renderSeeIn = () => (
  <section className="main-container">
    <TTitle
      level={1}
      borderColor={colors['primary-color']}
      textColor={colors['primary-color']}
      className="text-center"
      dividerWidth="29%"
    >
      AS SEEN IN
   </TTitle>
    <Row className="my-3 seen-in" align="middle" justify="center">
      {seenIns?.map(seeIn =>
        <Col xs={12} sm={12} md={12} lg={8} className="medium" key={seeIn.id}>
          <a href={seeIn?.link} target="_blank" rel="noopener noreferrer">
            <img src={seeIn?.icon} alt="brand_icon" width="100%" height="auto" />
          </a>
        </Col>
      )}
    </Row>
  </section>
)