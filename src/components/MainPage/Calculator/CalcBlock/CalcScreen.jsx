import styles from '../../../../styles/MainPage/Calculator/CalcBlock/CalcScreen.module.css';
import { useRef, useEffect } from 'react';

export const CalcScreen = (props) => {
  const { previousOperand, operator, currentOperand } = props;
  const screenRef = useRef(null);

  useEffect(() => {
    // Автофокус на экран при загрузке
    screenRef.current.focus();
  }, []);

  return (
    <div className={styles.CalcScreenContainer} ref={screenRef} tabIndex={0}>
      <div className={styles.Screen}>
        <div className={styles.PreviousOperand}>
          {previousOperand} {operator}
        </div>
        <div className={styles.CurrentOperand}>
          {currentOperand || '0'}
        </div>
      </div>
    </div>
  );
};