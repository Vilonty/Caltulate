import styles from '../../../../../styles/MainPage/Calculator/CalcBlock/CalcButtonPanel/CalcButton.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../pages/MainPage.jsx';

export const CalcButton = (props) => {
  const { item, type, dispatch, isActive } = props;
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    dispatch({ type, payload: item });
  };

  const getButtonClass = () => {
    const baseClass = styles.CalcButton;
    const themeClass = theme === 'dark' ? styles.dark : styles.light;
    const activeClass = isActive ? styles.active : '';
    
    if (['+', '-', '×', '÷', '='].includes(item)) {
      return `${baseClass} ${styles.operator} ${themeClass} ${activeClass}`;
    }
    if (['AC', 'DEL'].includes(item)) {
      return `${baseClass} ${styles.function} ${themeClass} ${activeClass}`;
    }
    if (item === 'History') {
      return `${baseClass} ${styles.history} ${themeClass} ${activeClass}`;
    }
    return `${baseClass} ${themeClass} ${activeClass}`;
  };

  return (
    <div className={styles.CalcButtonContainer}>
      <button
        className={getButtonClass()}
        onClick={handleClick}
      >
        {item}
      </button>
    </div>
  );
};