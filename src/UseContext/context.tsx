import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [hireMeModal, setHireMeModal] = useState(false);
    const [msgSent, setMsgSent] = useState(false);
  
    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme, hireMeModal, setHireMeModal, msgSent, setMsgSent}}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export const useTheme = () => {
    return useContext(ThemeContext);
  };