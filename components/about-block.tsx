import React,  { useState } from 'react';
import TagsBlock from './tags-block';
import { Image, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AboutBlock:React.FC = () => {
    const _and:string='&';
    const [isFull, setIsFull] = useState<boolean>(false);

    const toggleFull = () => {
        setIsFull(prev => !prev);
    }

    return <div className='block-wrapper'>
        <div className={`about-block ${isFull ? 'is-full' : ''}`}>
            <h4 className='title--medium about-block__title'>About This</h4>
            <h5 className='title--medium about-block__subject'>Genres</h5>
            <TagsBlock list={['Horror', 'Psychological', 'Seinen']}/>
            <h5 className='title--medium about-block__title2'>Summary</h5>
            <p className='about-block__summary'>Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...</p>
            <p className='about-block__desc'>Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.</p>
            <div className='about-block__imgs'>
                <Image width={84} src="/images/a1.png" />
                <Image width={84} src="/images/a2.png" />
                <Image width={84} src="/images/a3.png" />
                <Image width={84} src="/images/a4.png" />
                <Image width={84} src="/images/a5.png" />
            </div>
            <div className='about-block__person-list'>
                <h5 className='title--medium about-block__subject'>Credits</h5>
                <div className='about-block__person-item'>
                    <div className='about-block__person-avatar'><Avatar src="/images/p1.png" size={40} /></div>
                    <div className='about-block__person-infos'><p className='name'>Kodansha</p><p className='role'>Publisher</p></div>
                </div>
                <div className='about-block__person-item'>
                    <div className='about-block__person-avatar'><Avatar src="/images/p1.png" size={40} /></div>
                    <div className='about-block__person-infos'><p className='name'>Johnnie Christmas</p><p className='role'>Story</p></div>
                </div>
                <div className='about-block__person-item'>
                    <div className='about-block__person-avatar'><Avatar src="/images/p1.png" size={40} /></div>
                    <div className='about-block__person-infos'><p className='name'>Jack T. Cole</p><p className='role'>Art</p></div>
                </div>
            </div>
            <div className='about-block__others'>
                <h5 className='title--medium about-block__subject'>Other Facts</h5>
                <div className='about-block__others-infos'>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Last Updated</span> : 
                        <span className='detail'>2 days ago</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Age Rating</span> : 
                        <span className='color-white-1 detail'>Mature (18+)</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Color</span> : 
                        <span className='color-white-1 detail'>Black {_and} White</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Origin Media</span> : 
                        <span className='color-white-1 detail'>Print</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Style Origin</span> : 
                        <span className='color-white-1 detail'>Japanese Comics (Manga)</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Copyright</span> : 
                        <span className='color-white-1 detail'>© Daruma Matsuura / Kodansha Ltd.</span>
                    </p>
                    <p className='about-block__others-infos-item'>
                        <span className='color-white-2 label'>Other Names</span> : 
                        <span className='color-white-1 detail'>Kasane -voleuse de visage</span>
                    </p>
                </div>
            </div>
            <div className='btn-group'>
                <button className='about-block__show-more' onClick={toggleFull}>Show More</button>
            </div>
        </div>
    </div>
}

export default AboutBlock