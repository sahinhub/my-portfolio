import React, { useContext, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { ThemeContext } from '../context/themeContext';

const ThemeToggle = () => {
  const {isdark,setIsdark}=useContext(ThemeContext);

   useEffect(() => {
      // Store the theme in localStorage and apply it to <html> element
      localStorage.setItem('isdark', JSON.stringify(isdark));
      document.documentElement.setAttribute('data-theme', isdark ? 'dark' : 'light');
    }, [isdark]);
  return (
    <div>
      <label className="swap swap-rotate">
        {/* Hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={isdark}
          onChange={() => setIsdark(!isdark)}
          className="theme-controller"
        />

        {/* Sun icon for light theme */}
        <IoSunny className="swap-off text-2xl fill-current" />

        {/* Moon icon for dark theme */}
        <IoMoon className="swap-on text-2xl fill-current" />
      </label>
    </div>
  );
};

export default ThemeToggle;
