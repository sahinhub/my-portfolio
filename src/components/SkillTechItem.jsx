import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const SkillTechItem = ({techItem}) => {
    const {isdark}=useContext(ThemeContext);
    console.log(isdark);
    const {name,image_url}=techItem;
    return (
        <div className={`skill-card flex gap-1 justify-between items-center border  ${isdark?'border-gray-600 bg-gray-800':'border-gray-300'}  bg-gray-50 py-1 px-[6px] rounded-lg text-center`}>
            <img className='w-10 h-auto' src={image_url} alt={name} />
            <p className={`${isdark?'text-amber-50':'text-black'}  text-lg`}>{name}</p>
        </div>
    );
};

export default SkillTechItem;