export const initialState = {
  userId: null,
};

export type InitialStateType = {
  userId: string | null;
};

export type ActionType =
  | { type: "loginUser"; id: string }
  | { type: "logOutUser" };

export const reducer = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "loginUser":
      localStorage.setItem("userId", action.id);
      return {
        ...state,
        userId: action.id,
      };
    case "logOutUser":
      localStorage.removeItem("userId");
      return {
        ...state,
        userId: null,
      };
    default:
      return state;
  }
};
