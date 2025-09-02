import React, { useContext } from 'react';
import heroImage from '../assets/sahin.png'
import { Typewriter } from 'react-simple-typewriter';
import { BsArrowRight } from 'react-icons/bs';
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
import { Linkedin } from 'lucide-react';
import { ThemeContext } from '../context/themeContext';
const Hero = () => {

    const {isdark}=useContext(ThemeContext);

    const handleDone = () => {
      
    }
    return (
        <div className=''>

            <div className=" min-h-[450px] overflow-hidden">
                <div className="hero-content text-center mx-auto ">
                    <div className="lg:max-w-3xl w-full flex flex-col justify-center items-center gap-4">
                        <div className='bgGradientAnim rounded-full p-1 w-1/2 lg:max-w-full'><img className='rounded-full w-full' src={heroImage} alt="Sahin Alam" /></div>
                        <h1 className="text-7xl myName w-2xl headingGradient">Sahin Alam</h1>
                        <h3 className="max-w-full text-2xl lg:text-3xl font-extrabold font-[montserrat]">

                            <Typewriter
                                words={[
                                    'Front-End Web Developer',
                                    'Writing clean ,efficient and impactful code',
                                    'Always learning, building and innovating',
                                    'WordPress to Full-Stack Developement',
                                    'Crafting fast and user-friendly web experience'
                                ]}
                                loop={'_'}
                                cursor
                                cursorStyle="|"
                                typeSpeed={10}
                                deleteSpeed={50}
                                delaySpeed={2500}
                                onLoopDone={handleDone}
                                onType={(count) => console.log(`Typing... word index: ${count}`)} // ✅ function
                            />



                        </h3>
                        <p className="max-w-2xl">
                            Web Designer & Developer specializing in WordPress, now diving into Full Stack Web Development.
                        </p>
                        <div className={`${isdark&&'btnAnimation'} w-40 h-12 flex justify-center rounded-lg p-[1px]`}>
                            <button className={`cursor-pointer ${isdark?'btnGradientDark':'btnBg'} w-full rounded-lg text-primary flex justify-center items-center gap-2`}>View Resume <BsArrowRight></BsArrowRight></button>
                        </div>

                        {/* Social Icon */}

                        <div className="flex my-5 space-x-6 text-2xl text-gray-600">
                            <a
                                href="https://linkedin.com/in/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0A66C2] transition"
                            >
                                <Linkedin strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://twitter.com/sahincoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1DA1F2] transition"
                            >
                                <FaXTwitter className='text-2xl' />
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