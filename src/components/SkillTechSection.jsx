import React from 'react';
import SkillTechItem from './SkillTechItem';

const SkillTechSection = () => {
    const skills=[
        {name:'Html',image_url:'https://i.ibb.co.com/9kyPhkLS/html-icon-3d-rendering-illustration-vector-removebg-preview-1.png'},
        {name:'Css',image_url:'https://i.ibb.co.com/8pgNGKD/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-removebg-preview-2.png'},
        {name:'Php',image_url:'https://i.ibb.co.com/Q3WrZz0h/PHP-logo-svg-1.png'},
        {name:'Javscript',image_url:'https://i.ibb.co.com/PvMWpKqv/javascript-js-logo-png-seeklogo-273557-1.png'},
        {name:'WordPress',image_url:'https://i.ibb.co.com/1fVLZLdp/pngimg-com-wordpress-PNG72-1.png'},
        {name:'Divi',image_url:'https://i.ibb.co.com/1fvQxZPQ/image-5.png'},
        {name:'Tailwind',image_url:'https://i.ibb.co.com/DDchYng6/image-3.png'},
        {name:'Wix',image_url:'https://i.ibb.co.com/6kC9HQp/image-2.png'},
        {name:'WP Bakery',image_url:'https://i.ibb.co.com/wF7hcXNV/image-1.png'},
        {name:'Figma',image_url:'https://i.ibb.co.com/GfD7gr6Y/figma-logo-512-1.png'},
    ]
    return (
        <div className='flex gap-2 flex-wrap justify-center items-center max-w-full lg:max-w-2/3 mx-auto'>
            {
                skills.map((item,idx)=><SkillTechItem key={idx} techItem={item}></SkillTechItem>)
            }
        </div>
    );
};

export default SkillTechSection;