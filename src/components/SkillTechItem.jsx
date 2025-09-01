import React from 'react';

const SkillTechItem = ({techItem}) => {
    const {name,image_url}=techItem;
    return (
        <div className='flex gap-2 justify-start items-center skillTechBG'>
            <img className='w-7 h-auto' src={image_url} alt={name} />
            <p className='text-lg text-amber-50'>{name}</p>
        </div>
    );
};

export default SkillTechItem;