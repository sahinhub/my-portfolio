import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const SkillTechItem = ({techItem}) => {
    const {isdark}=useContext(ThemeContext);
    console.log(isdark);
    const {name,image_url}=techItem;
    return (
        <div className={`flex gap-1 justify-start items-center ${isdark? 'darkSkillTechBG ':' skillTechBg'}`}>
            <img className='w-10 h-auto' src={image_url} alt={name} />
            <p className='text-amber-50 text-lg'>{name}</p>
        </div>
    );
};

export default SkillTechItem;