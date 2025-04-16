export const calculatorReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_DIGIT':
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: action.payload,
            overwrite: false,
          };
        }
        if (action.payload === '0' && state.currentOperand === '0') return state;
        if (action.payload === '.' && state.currentOperand?.includes('.')) return state;
        return {
          ...state,
          currentOperand: `${state.currentOperand || ''}${action.payload}`,
        };
  
      case 'CHOOSE_OPERATION':
        if (state.currentOperand == null && state.previousOperand == null) return state;
        if (state.currentOperand == null) {
          return {
            ...state,
            operator: action.payload,
          };
        }
        if (state.previousOperand == null) {
          return {
            ...state,
            operator: action.payload,
            previousOperand: state.currentOperand,
            currentOperand: null,
          };
        }
        return {
          ...state,
          previousOperand: evaluate(state),
          operator: action.payload,
          currentOperand: null,
        };
  
      case 'CLEAR':
        return {};
  
      case 'DELETE_DIGIT':
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currentOperand: null,
          };
        }
        if (state.currentOperand == null) return state;
        if (state.currentOperand.length === 1) {
          return {
            ...state,
            currentOperand: null,
          };
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
  
        case 'EVALUATE':
            if (state.operator == null || state.currentOperand == null || state.previousOperand == null) {
              return state;
            }
            const result = evaluate(state);
            const historyEntry = {
              calculation: `${state.previousOperand} ${state.operator} ${state.currentOperand}`,
              result: result,
              timestamp: new Date().toISOString()
            };
            
            return {
              ...state,
              overwrite: true,
              previousOperand: null,
              operator: null,
              currentOperand: result,
              history: [...(state.history || []), historyEntry]
            };
      
          case 'TOGGLE_HISTORY':
            return {
              ...state,
              showHistory: !state.showHistory
            };
      
          case 'CLEAR_HISTORY':
            return {
              ...state,
              history: []
            };
  
      default:
        return state;
    }
  };
  
  function evaluate({ currentOperand, previousOperand, operator }) {
    const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return '';
    let computation = '';
    switch (operator) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return '';
    }
    return computation.toString();
  }