
import { LuPalette, LuShoppingCart, LuSettings, LuCode } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from 'daisyui/components/button';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
const iconMap = {
  LuPalette,
  FaCode,
  LuShoppingCart,
  IoSearch,
  LuSettings,
  LuCode,
};

function getIconComponent(iconString) {
  // Extract icon name from string like "<LuPalette/>"
  const match = iconString.match(/<\s*(\w+)\s*\/?\s*>/);
  if (match && iconMap[match[1]]) {
    const IconComponent = iconMap[match[1]];
    return <IconComponent className={`text-2xl text-blue-700`} />;
  }
  return null;
}

const ServiceItem = ({ service }) => {
  const { isdark } = useContext(ThemeContext);

  const { icon, title, description } = service;
  return (
    <div className={`${isdark ? 'bg-[#110834] border-gray-800' : 'bg-white border-gray-200'} service-card p-5 rounded-lg border-2 space-y-2 transition-colors duration-500`}>
      <div className={`w-12 h-12 ${isdark ? 'bg-primary/10' : 'bg-primary'} rounded-lg flex items-center justify-center mb-4 hover:bg-primary transition-colors`}>
        {getIconComponent(icon)}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`${isdark?'text-gray-400':'text-gray-700'} service-description `}>{description}</p>
      {
        service.features.map((feature, idx) => <div className='flex items-center gap-1 ' key={idx}>
          <ArrowRight color='blue' size={15} /> <span className='text-sm'>{feature}</span>
        </div>)
      }
      <div className={`${isdark&&'btnAnimation'} h-12 flex justify-center rounded-lg p-[1px] mt-3 serviceBtn`}>
                            <button className={`cursor-pointer ${isdark? 'btnGradientDark':'btnBg'} w-full rounded-lg flex justify-center items-center gap-2`}>Learn More <ArrowRight size={15}></ArrowRight></button>
                        </div>
    </div>
  );
};

export default ServiceItem;
