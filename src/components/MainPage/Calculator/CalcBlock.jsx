import styles from '../../../styles/MainPage/Calculator/CalcBlock.module.css';
import { CalcButtonPanel } from '../../../components/MainPage/Calculator/CalcBlock/CalcButtonPanel.jsx';
import { CalcScreen } from '../../../components/MainPage/Calculator/CalcBlock/CalcScreen.jsx';
import { HistoryPanel } from '../../../components/MainPage/Calculator/CalcBlock/HistoryPanel.jsx';
import { useReducer, useEffect } from 'react';
import { calculatorReducer } from '../../../scripts/MainPage/calculatorReducer';

export const CalcBlock = (props) => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    showHistory: false,
    history: []
  });

  // Загрузка из localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('calculatorState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: 'RESTORE_STATE', payload: parsedState });
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('calculatorState', JSON.stringify({
      ...state,
      showHistory: false // Не сохраняем состояние открытия истории
    }));
  }, [state]);

  const handleSelectHistory = (item) => {
    dispatch({ type: 'SELECT_FROM_HISTORY', payload: item.result });
  };

  const handleClearHistory = () => {
    dispatch({ type: 'CLEAR_HISTORY' });
  };

  return (
    <div className={styles.CalcBlockContainer}>
      <CalcScreen {...state} />
      <CalcButtonPanel 
        dispatch={dispatch} 
        showHistory={state.showHistory}
      />
      {state.showHistory && (
        <HistoryPanel
          history={state.history || []}
          onClearHistory={handleClearHistory}
          onSelectHistory={handleSelectHistory}
        />
      )}
    </div>
  );
};