import styles from '../../../../styles/MainPage/Calculator/CalcBlock/CalcButtonPanel.module.css';
import { CalcButton } from '../../../../components/MainPage/Calculator/CalcBlock/CalcButtonPanel/CalcButton.jsx';
import { useMemo } from 'react';

export const CalcButtonPanel = ({ dispatch, showHistory }) => {
  const CalcButtonProps = useMemo(() => [
    { id: 0, item: 'AC', type: 'CLEAR' },
    { id: 1, item: 'DEL', type: 'DELETE_DIGIT' },
    { id: 2, item: '÷', type: 'CHOOSE_OPERATION' },
    { id: 3, item: '×', type: 'CHOOSE_OPERATION' },
    { id: 4, item: '7', type: 'ADD_DIGIT' },
    { id: 5, item: '8', type: 'ADD_DIGIT' },
    { id: 6, item: '9', type: 'ADD_DIGIT' },
    { id: 7, item: '-', type: 'CHOOSE_OPERATION' },
    { id: 8, item: '4', type: 'ADD_DIGIT' },
    { id: 9, item: '5', type: 'ADD_DIGIT' },
    { id: 10, item: '6', type: 'ADD_DIGIT' },
    { id: 11, item: '+', type: 'CHOOSE_OPERATION' },
    { id: 12, item: '1', type: 'ADD_DIGIT' },
    { id: 13, item: '2', type: 'ADD_DIGIT' },
    { id: 14, item: '3', type: 'ADD_DIGIT' },
    { id: 15, item: '=', type: 'EVALUATE' },
    { id: 16, item: '0', type: 'ADD_DIGIT' },
    { id: 17, item: '.', type: 'ADD_DIGIT' },
    { id: 18, item: 'History', type: 'TOGGLE_HISTORY' }
  ], []);

  return (
    <div className={styles.CalcButtonPanelContainer}>
      {CalcButtonProps.map((CalcButtonInfo) => (
        <CalcButton
          key={CalcButtonInfo.id}
          item={CalcButtonInfo.item}
          type={CalcButtonInfo.type}
          dispatch={dispatch}
          isActive={CalcButtonInfo.type === 'TOGGLE_HISTORY' && showHistory}
        />
      ))}
    </div>
  );
};