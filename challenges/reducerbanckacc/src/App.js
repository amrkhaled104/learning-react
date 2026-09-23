import { useReducer } from "react";
import "./styles.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isActive: true,
        balance: 500,
        loan: 0,
      };

    case "Deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };

    case "Withdraw":
      return {
        ...state,
        balance: state.balance >= 50 ? state.balance - 50 : state.balance,
      };

    case "loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: 5000,
        balance: state.balance + 5000,
      };

    case "Pay":
      return {
        ...state,
        loan: state.balance >= state.loan && state.loan > 0 ? 0 : state.loan,
        balance:
          state.balance >= state.loan && state.loan > 0
            ? state.balance - state.loan
            : state.balance,
      };

    case "Close":
      if (state.balance !== 0 || state.loan !== 0) return state;
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={() => dispatch({ type: "start" })} disabled={isActive}>
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "Deposit" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "Withdraw" })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "loan" })} disabled={!isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "Pay" })} disabled={!isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "Close" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
