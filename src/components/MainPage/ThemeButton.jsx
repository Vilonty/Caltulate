import styles from '../../styles/MainPage/ThemeButton.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/MainPage.jsx';

export const ThemeButton = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.ThemeButtonContainer}>
      <button 
        className={styles.ThemeButton}
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
      </button>
    </div>
  );
};