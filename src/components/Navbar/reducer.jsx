import { data } from "../../mock";

export const InitialValue = {
  user: data,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      let res = state.user.filter((vl) => vl.id !== action.payload);
      return { ...state, user: res };
    default:
      return state;
  }
};
