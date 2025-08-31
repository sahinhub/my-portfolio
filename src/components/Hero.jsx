import React from 'react';
import heroImage from '../assets/sahin.png'
import { Typewriter } from 'react-simple-typewriter';
import { BiRightArrow } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
const Hero = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className=''>

            <div className="hero  min-h-[400px]">
                <div className="hero-content text-center ">
                    <div className="w-full lg:max-w-2xl flex flex-col justify-centers items-center gap-4">
                        <div className='bgGradientAnim rounded-full p-1'><img className='rounded-full w-56' src={heroImage} alt="Sahin Alam" /></div>
                        <h1 className="text-7xl myName w-2xl">Sahin Alam</h1>
                        <h3 className=" text-2xl lg:text-4xl font-extrabold font-[montserrat]">

                            <Typewriter
                                words={['Front-End Web Developer','Writing clean ,efficient and impactful code','Always learning, building and innovating','From WordPress to Full-Stack Developement','Crafting fast and user-friendly we experience']}
                                loop={'_'}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={700}
                                onLoopDone={handleDone}
                                onType='_'
                            />


                        </h3>
                        <p className="">
                            Web Designer & Developer specializing in WordPress, now diving into Full Stack Web Development.
                        </p>
                        <button className="btnGradient flex justify-center items-center gap-2">View Resume <BsArrowRight></BsArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;