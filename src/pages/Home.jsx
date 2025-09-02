import React from 'react';
import Hero from '../components/Hero';
import { BsStack } from 'react-icons/bs';
import SkillTechSection from '../components/SkillTechSection';

const Home = () => {
    return (
       <div className='py-5 container mx-auto'>
            <Hero></Hero>
              <div className="divider">
                <BsStack className='text-6xl'></BsStack> 
              
              <h3 className='headingGradient font-[poppins] font-bold text-3xl lg:text-4xl'>My Skills</h3></div>


            <div className='mb-5'>
              {/* tech section */}
              
                <SkillTechSection></SkillTechSection>
            </div>
              

        </div>
    );
};

export default Home;