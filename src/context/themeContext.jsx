import React, { createContext, useState } from 'react';
export const ThemeContext=createContext(null);

const themeContextProvider = ({children}) => {
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

    const themeState={isdark,setIsdark};

    return (
        <ThemeContext.Provider value={themeState}>
            {children}
        </ThemeContext.Provider>
    );
};

export default themeContextProvider;