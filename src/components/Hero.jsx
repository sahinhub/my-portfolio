import React from 'react';
import heroImage from '../assets/sahin.png'
import { Typewriter } from 'react-simple-typewriter';
import { BiRightArrow } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
const Hero = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className=''>

            <div className=" min-h-[450px] overflow-hidden">
                <div className="hero-content text-center mx-auto ">
                    <div className="lg:max-w-2xl w-full flex flex-col justify-center items-center gap-4">
                        <div className='bgGradientAnim rounded-full p-1 w-1/2 lg:max-w-full'><img className='rounded-full w-full' src={heroImage} alt="Sahin Alam" /></div>
                        <h1 className="text-7xl myName w-2xl">Sahin Alam</h1>
                        <h3 className="max-w-full text-2xl lg:text-3xl font-extrabold font-[montserrat]">

                            <Typewriter
                                words={['Front-End Web Developer', 'Writing clean ,efficient and impactful code', 'Always learning, building and innovating', 'WordPress to Full-Stack Developement', 'Crafting fast and user-friendly web experience']}
                                loop={'10'}
                                cursor={true}
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={700}
                                onLoopDone={handleDone}
                                onType='_'
                            />


                        </h3>
                        <p className="max-w-full">
                            Web Designer & Developer specializing in WordPress, now diving into Full Stack Web Development.
                        </p>
                        <div className='btnGradient'>
                            <button className="cursor-pointer  text-primary flex justify-center items-center gap-2">View Resume <BsArrowRight></BsArrowRight></button>
                        </div>

                        {/* Social Icon */}

                        <div className="flex my-5 space-x-6 text-2xl text-gray-600">
                            <a
                                href="https://linkedin.com/in/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0A66C2] transition"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://twitter.com/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1DA1F2] transition"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://behance.net/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1769FF] transition"
                            >
                                <FaBehance />
                            </a>
                            <a
                                href="https://dribbble.com/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#EA4C89] transition"
                            >
                                <FaDribbble />
                            </a>
                            <a
                                href="https://github.com/sahincoderbd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaGithub />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;