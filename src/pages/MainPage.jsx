import styles from '../styles/MainPage/MainPage.module.css';
import { CalcBlock } from '../components/MainPage/Calculator/CalcBlock.jsx';
import { ThemeButton } from '../components/MainPage/ThemeButton.jsx';
import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const MainPage = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${styles.Wrapper} ${theme === 'dark' ? styles.dark : ''} ${theme === 'light' ? styles.light : ''}`}>
        <CalcBlock />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
};
 