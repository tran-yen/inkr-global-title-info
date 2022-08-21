import React from 'react';
import {  Col, Row, Image } from 'antd';

const PromoBlock:React.FC = () => {
    return <div className='block-wrapper'>
        <div className='promo-block'>
            <h4 className='title--medium promo-block__title color-white-1'>{`Pricing & Promotion`}</h4>
            <div  className='promo-block__content'>
                <Row  className='promo-block__summary'>
                    <Col span={12}>
                        <div className='color-white-2'>FREE</div>
                        <div className='promo-block__text--bold-white'>3 chapters </div>
                    </Col>
                    <Col span={12}>
                        <div className='color-white-2'>LOCKED</div>
                        <div>
                            <span className='promo-block__text--bold-white'>7 chapters </span>
                            <span className='color-white-2'>{`(`}
                                <span className='icon-coin'><Image src="/images/coin.png" /></span>
                                {`5 / chapter`}
                                {`)`}
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className='promo-block__total-price'>
                            <div>
                                <div className='promo-block__text--bold-white'>Total Price</div>
                                <div className='color-white-2'>Instant access to all chapters • No Ad</div>
                            </div>
                            <div className='promo-block__price'><span className='icon-coin'>
                                <Image src="/images/coin.png" />
                                </span>
                                35
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} >
                        <div className='promo-block__saving'>
                            <div>
                                <div className='color-purple-1 saving-title'>Save money with INKR Extra
                                    <span className='icon-queen'><Image src="/images/queen.png" /></span>
                                </div>
                                <div className='color-white-2'>Instant access to all chapters • No Ad •  Extra saving</div>
                            </div>
                            <div>
                                <div className='promo-block__saving-info'>
                                    <div className='saving-percent'>-50%</div>
                                    <div className='saving-coin'>
                                        <span className='icon-coin'><Image src="/images/coin.png" /></span>
                                        <span className='old-price'>35</span>
                                        <span className='new-price'>18</span>
                                    </div>
                                </div>
                                <div className='color-white-2 saving-note'>Saving rates may vary</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <p className='promo-block__view-more'><a className='color-white-2' href='#'>Want to read for free? Learn more </a></p>
        </div>
    </div>
}

export default PromoBlock