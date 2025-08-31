import React, { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
  // Check if the user has a saved theme preference in localStorage
  const [isdark, setIsdark] = useState(() => {
    const savedTheme = localStorage.getItem('isdark');
    // If a theme is saved, use it; otherwise, default to system preference
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    } else {
      // Use system theme if no saved preference
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

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
