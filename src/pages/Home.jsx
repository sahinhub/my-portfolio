import React, { useContext } from 'react';
import Hero from '../components/Hero';
import { BsStack } from 'react-icons/bs';
import SkillTechSection from '../components/SkillTechSection';
import { ThemeContext } from '../context/themeContext';
import About from '../components/AboutComponent';

const Home = () => {
  const {isdark}=useContext(ThemeContext);
    return (
       <div className='py-5 container mx-auto'>
            <Hero></Hero>
              <div className="divider h-[1px]">
                <BsStack className='text-7xl'></BsStack> 
              
              <h3 className={`${isdark&&'headingGradient'} font-[montserrat] font-bold lg:text-3xl text-2xl `}>Work with Technolgies</h3></div>
            <div className='mb-5'>
              {/* tech section */}
              
                <SkillTechSection></SkillTechSection>
            </div>
            <About></About>
              

        </div>
    );
};

export default Home;