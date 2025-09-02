import React from 'react';
import SkillTechItem from './SkillTechItem';

const SkillTechSection = () => {
    const skills=[
        {name:'Html',image_url:'https://i.postimg.cc/G3qPFSw2/html-1.png'},
        {name:'Css',image_url:'https://i.postimg.cc/cC4RqfY0/css.png'},
        {name:'Tailwind',image_url:'https://i.postimg.cc/W3VmnB1D/tailwind-1.png'},
        {name:'Php',image_url:'https://i.postimg.cc/wMfh93cJ/php-1.png'},
        {name:'Javscript',image_url:'https://i.ibb.co.com/PvMWpKqv/javascript-js-logo-png-seeklogo-273557-1.png'},
        {name:'React',image_url:'https://i.postimg.cc/9M39rLp1/react.png'},
        {name:'WordPress',image_url:'https://i.postimg.cc/fTPxFtbQ/wordpress-1.png'},
        {name:'Wix',image_url:'https://i.ibb.co.com/6kC9HQp/image-2.png'},
        {name:'Shopify',image_url:'https://i.postimg.cc/L8qV6kWs/shopify.png'},
        {name:'Figma',image_url:'https://i.postimg.cc/DzLd1vnk/figma-1.png'},
    ]
    return (
        <div className='flex gap-2 py-4 flex-wrap justify-center items-center max-w-full lg:max-w-2/3 mx-auto'>
            {
                skills.map((item,idx)=><SkillTechItem key={idx} techItem={item}></SkillTechItem>)
            }
        </div>
    );
};

export default SkillTechSection;