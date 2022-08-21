import React from 'react';
import {  Button, Image } from 'antd';
import { LikeOutlined, ReadOutlined } from '@ant-design/icons';

const MainBlock:React.FC = () => {
    return <div className='block-wrapper'>
        <div className='main-block'>
            <div className='main-block__image'>
                <Image src="/images/pic1.png"
            />
            </div>
            <div className='main-block__infos'>
                <h2 className='title--medium main-block__title'>Kasane</h2>
                <h5 className='title--regular main-block__author'>By Kodansha</h5>
                <h5 className='title--regular main-block__chapters'>Drama • 10 Chapters</h5>
                <div className='mainBlock__social'>
                    <div><LikeOutlined /> 74,483</div>
                    <div><ReadOutlined /> 15,863</div>
                </div>
                <div className='main-block__tags'>
                    <span>18+</span>
                    <span>NEW</span>
                    <span>TRENDING</span>
                    <span>BESTSELLER</span>
                    <span>MANGA</span>
                </div>
                <Button className='main-block__read'>Read First Chapter for FREE</Button>
            </div>
        </div>
    </div>
}

export default MainBlock