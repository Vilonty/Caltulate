export const HistoryPanel = ({ history, onClearHistory, onSelectHistory, theme }) => {
  return (
    <div className={`${styles.HistoryPanel} ${styles[theme]}`}>
      <div className={`${styles.HistoryHeader} ${styles[theme]}`}>
        <h3>История вычислений</h3>
        <button onClick={onClearHistory}>Очистить</button>
      </div>
      <div className={styles.HistoryListContainer}>
        <div className={`${styles.HistoryListWrapper} ${styles[theme]}`}>
          <ul className={styles.HistoryList}>
            {history.map((item, index) => (
              <li key={index} onClick={() => onSelectHistory(item)}>
                <div className={styles.HistoryCalculation}>{item.calculation} =</div>
                <div className={styles.HistoryResult}>{item.result}</div>
                <div className={styles.HistoryTime}>
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