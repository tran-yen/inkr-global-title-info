import React,  { useState } from 'react';
import {BellOutlined, SortAscendingOutlined} from '@ant-design/icons';
import ChapterList from './chapter-list';

const ChapterBlock:React.FC = () => {
    const [lastRead] = useState([
        {
            img: '/images/c.png',
            name: 'Chapter 1',
            readTime: 'Last read 2 days ago ',
            isLock: false,
            readPercent: 60,
            isReading: true,
            price: null
        }
    ]);

    const [allChapter] = useState([
        {
            img: '/images/c.png',
            name: 'Chapter 1',
            readTime: null,
            isLock: false,
            readPercent: 60,
            isReading: true,
            price: null
        },
        {
            img: '/images/c.png',
            name: 'Chapter 2',
            readTime: null,
            isLock: false,
            readPercent: null,
            isReading: false,
            price: null
        },
        {
            img: '/images/c.png',
            name: 'Chapter 3',
            readTime: null,
            isLock: false,
            readPercent: null,
            isReading: false,
            price: null
        },
        {
            img: '/images/c.png',
            name: 'Chapter 4',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 5',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 6',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 7',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 8',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 9',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        },
        {
            img: '/images/c.png',
            name: 'Chapter 10',
            readTime: null,
            isLock: true,
            readPercent: null,
            isReading: false,
            price: 5
        }
    ])
    return <div className='block-wrapper'>
        <div className='chapter-block'>
            <h5 className='title--medium chapter-block__title'>Last Read</h5>
            <ChapterList list={lastRead}/>
            <div className='chapter-block___head'>
                <h5 className='title--medium chapter-block__title'>10 Chapters</h5>
                <p className='chapter-block__sub-title'>New chapter every Thursday </p>
                <div className='chapter-block___tool'>
                    <span className='tool-wrap'><BellOutlined /></span>
                    <span className='tool-wrap'><SortAscendingOutlined /></span>
                </div>
            </div>
            <ChapterList list={allChapter}/>
        </div>
    </div>
}

export default ChapterBlock