import type { NextPage } from 'next'
import Head from 'next/head'
import 'antd/dist/antd.css';
import style from '../styles/Home.module.css'

import {  Col, Row } from 'antd';
import MainBlock from '../components/main-block';
import AboutBlock from '../components/about-block';
import PromoBlock from '../components/promo-block';

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>INKR PROJECT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <Row gutter={{lg: 32, xl: 32, xxl: 24 }}>
          <Col lg={15} xl={16} xxl={16}>
            <MainBlock />
            <PromoBlock />
          </Col>
          <Col lg={9} xl={8} xxl={8}>
            <AboutBlock />
          </Col>
        </Row>
      </main>
    </div>
  )
}

export default Home
