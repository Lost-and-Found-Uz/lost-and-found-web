import React, { createContext, useContext, useReducer } from "react";
import { ActionType, initialState, InitialStateType, reducer } from "./reducer";

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};
