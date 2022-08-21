import React from 'react';

const TagsBlock:React.FC<{list:Array<string>}> = ({list}) => {

    return <div className='tags-block'>
        {
            list.map(item => <span>{item}</span>)
        }
    </div>
}

export default TagsBlock