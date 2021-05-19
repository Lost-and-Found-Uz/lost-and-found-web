export const initialState = {
  jwt: null,
};

export type InitialStateType = {
  jwt: string | null;
};

export type ActionType =
  | { type: "loginUser"; jwt: string }
  | { type: "logOutUser" };

export const reducer = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "loginUser":
      localStorage.setItem("jwt", action.jwt);
      return {
        ...state,
        jwt: action.jwt,
      };
    case "logOutUser":
      localStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
      };
    default:
      return state;
  }
};
