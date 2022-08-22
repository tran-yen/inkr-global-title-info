import React,  { useState } from 'react';
import { Image, Avatar, Progress } from 'antd';
import { LockOutlined } from '@ant-design/icons';

export interface chapter {
    img: string;
    name: string;
    readTime:string | null;
    isLock: boolean;
    readPercent: number | null;
    isReading: boolean;
    price: number | null | undefined;
}

const ChapterList:React.FC<{list:Array<chapter>}> = ({list}) => {

    return <div className='chapter__list'>
        {
            list.map((item, index) => 
            <div className={`chapter__item ${item.isReading ? 'is-reading' : null} ${item.isLock ? 'is-lock' : null}`} key={index}>
                <div className='chapter__thumb'>
                    <Image width={78} src={item.img}/>
                    {item.readPercent ? 
                    <Progress 
                    className='chapter-progress' 
                    size="small" 
                    percent={item.readPercent} 
                    showInfo={false} 
                    strokeColor={'#FFD60A'}
                    trailColor={'#000000'}
                    strokeWidth={4}
                    strokeLinecap={'round'}
                    />
                     : null }
                    {item.isLock ? <Avatar className='chapter__lock-icon' size={28} icon={<LockOutlined />}/> : null}
                </div>
                <div className='chapter__detail'>
                    <p className='chapter__name'>{item.name}</p>
                    { item.readTime ? <p className='chapter__read-time'>{item.readTime}</p> : null}
                    { !item.isLock ? <span className='chapter__price'>FEE</span> : null}
                    { item.isLock ? <span className='chapter__price'>
                        <span><Image width={16} src="/images/coin.png" /></span>
                        <span className='chapter__price-num'>{item.price}</span>
                    </span> : null}
                </div>
            </div>)
        }
    </div>
}

export default ChapterList