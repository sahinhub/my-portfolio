import React, { useContext, useEffect, useState } from 'react';
import line from "../assets/Line 5.svg";
import serviceIcon from "../assets/service icon.svg";
import aboutMeLight from "../assets/Line light (1).svg";
import { ThemeContext } from "../context/themeContext";

import ServiceItem from './ServiceItem';


const ServiceComponent = () => {
    const { isdark } = useContext(ThemeContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
       fetch('/services.json')
         .then(response => response.json())
         .then(data => {
          setServices(data);
         })
         .catch(error => {
           console.error('Error fetching services data:', error);
         });
    }, []);
    return (
        <div className='text-left py-10 space-y-2'>
            <img className="w-18" src={`${isdark ? line : aboutMeLight}`} alt="Sahin Alam" />
            <div className="flex gap-2">
                <img className="w-6 lg:w-8" src={serviceIcon} alt="" />
                <h3
                    className={`${isdark && "headingGradient"
                        } font-[montserrat] font-bold lg:text-3xl text-2xl `}
                > Services I provide </h3>
                
            </div>
            <p className={`max-w-2xl text-lg ${
            isdark ? "text-gray-300" : "text-gray-700"
            }`}
            >
            Comprehensive <span className=" textHighlight"> web development </span> services to bring your digital vision to life with precision and creativity.
            </p>

            {/* services */}
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-5'>
                   
                   {
                    services.map((service, index) => <ServiceItem key={index} service={service}></ServiceItem>)
                   }
            </div>
        </div>
        </div>
    );
};

export default ServiceComponent;