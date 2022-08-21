import React from 'react';
import TagsBlock from './tags-block';

const AboutBlock:React.FC = () => {
    return <div className='block-wrapper'>
        <div className='about-block'>
            <h4 className='title--medium about-block__title'>About This</h4>
            <h5 className='title--medium about-block__subject'>Genres</h5>
            <TagsBlock list={['Horror', 'Psychological', 'Seinen']}/>
            <h5 className='title--medium about-block__title2'>Summary</h5>
            <p className='about-block__summary'>Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...</p>
            <div className='btn-group'>
                <button className='about-block__show-more'>Show More</button>
            </div>
        </div>
    </div>
}

export default AboutBlock