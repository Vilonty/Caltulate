import themeStyles from '../../../../styles/MainPage/ThemeButton.module.css';
import historyStyles from '../../../../styles/MainPage/Calculator/HistoryPanel.module.css';

export const HistoryPanel = ({ history, onClearHistory, onSelectHistory, theme }) => {
  return (
    <div className={`${historyStyles.HistoryPanel} ${historyStyles[theme]}`}>
      <div className={`${historyStyles.HistoryHeader} ${historyStyles[theme]}`}>
        <h3>История вычислений</h3>
        <button onClick={onClearHistory}>Очистить</button>
      </div>
      <div className={historyStyles.HistoryListContainer}>
        <div className={`${historyStyles.HistoryListWrapper} ${historyStyles[theme]}`}>
          <ul className={historyStyles.HistoryList}>
            {history.map((item, index) => (
              <li key={index} onClick={() => onSelectHistory(item)}>
                <div className={historyStyles.HistoryCalculation}>{item.calculation} =</div>
                <div className={historyStyles.HistoryResult}>{item.result}</div>
                <div className={historyStyles.HistoryTime}>
                  {new Date(item.timestamp).toLocaleTimeString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};