import React, { useContext, useState } from "react";
import line from "../assets/Line 5.svg";
import aboutMe from "../assets/about me icon (1).svg";
import aboutMeLight from "../assets/Line light (1).svg";
import { ThemeContext } from "../context/themeContext";
import { BsDownload } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { IoMdClipboard } from "react-icons/io";

const About = () => {
    const { isdark } = useContext(ThemeContext);
    const [copied, setCopied] = useState(false);
    const email = "sahinhub@gmail.com"; // your email

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2s
        });
    };

    return (
        <div className="py-10 space-y-3 flex flex-col flex-nowrap justify-center">
            {/* Heading */}
            <div className="space-y-2">

            </div>

            {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row gap-6 items-start lg:items-center   justify-between">
                <div className="flex-1/2 space-y-3">
                    <img
                        className="w-18"
                        src={`${isdark ? line : aboutMeLight}`}
                        alt="Sahin Alam"
                    />
                    <div className="flex gap-2">
                        <img className="w-6 lg:w-8" src={aboutMe} alt="" />
                        <h3
                            className={`${isdark && "headingGradient"
                                } font-[montserrat] font-bold lg:text-3xl text-2xl `}
                        >
                            About Me
                        </h3>
                    </div>
                    <p
                    className={`max-w-2xl text-lg ${
                        isdark ? "text-gray-300" : "text-gray-700"
                    }`}
                    >
                    Since  2023, 
                    I've been working as a 
                    <span className=" text-[#382BF1]"> Junior Web Developer </span> 
                    at <span className=" text-[#382BF1]"><a href="https://wenextcoder.com/" target="blank_">We Next Coder Agency</a></span>, 
                    where I've honed my skills in creating 
                     exceptional digital experiences 
                    My journey began with 
                     WordPress development, 
                    where I mastered 
                   custom plugin development 
                    and <span className=" text-[#382BF1]"> theme customization</span>.
                    <br />
                    <br />
                    With over <span className=" text-[#382BF1]">200+ successfully completed projects </span> 
                    and a perfect client satisfaction rate, 
                    now I'm expanding my horizons into 
                     Full Stack Development, 
                    learning modern technologies like 
                    <span className=" text-[#382BF1]"> React, Next.js, Express.js, and MongoDB</span>. 
                    My goal is to become a 
                     versatile developer 
                    capable of building 
                     end-to-end web solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                        {/* Resume Button */}
                        <div
                            className={`${isdark && "btnAnimation"
                                } w-40 h-12 flex justify-center rounded-lg p-[1px]`}
                        >
                            <button
                                className={`cursor-pointer ${isdark ? "btnGradientDark" : "btnBgAlt"
                                    } w-full rounded-lg text-primary flex justify-center items-center gap-2`}
                            >
                                View Resume <BsDownload />
                            </button>
                        </div>

                        {/* Copy Email Button */}
                        <div
                            className={`${isdark && "btnAnimationAlt"
                                } w-40 h-12 flex justify-center rounded-lg p-[1px]`}
                        >
                            <button
                                onClick={handleCopy}
                                className={`cursor-pointer ${isdark ? "btnGradientDarkAlt" : "btnBg"
                                    } w-full rounded-lg text-primary flex justify-center items-center gap-2`}
                            >
                                {copied ? "Copied!" : "Copy Email"} {
                                    copied ? <IoMdClipboard />
                                        : <MdContentCopy />
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className=" flex1/2 lg:flex-1/3 ">
                    <img
                        className={`rounded-lg border-2 ${isdark ? "border-gray-700" : "border-gray-400"
                            } drop-shadow-3xl`}
                        src="https://i.postimg.cc/tgqDqyz9/0-a-Tj-Jr9sn-AJtd-Yyn.jpg"
                        alt="About Sahin Alam"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
