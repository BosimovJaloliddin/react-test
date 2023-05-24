import React, { createContext, useReducer } from "react";
import { student } from "../../mock/mock";
export const StudentContext = createContext();

export const StudentsList = ({ childern }) => {
  const [state, dispatch] = useReducer(
    (data, action) => {
      return data;
    },
    {
      user: student,
    }
  );
  return (
    <StudentContext.Provider value={[state, dispatch]}>
      {childern}
    </StudentContext.Provider>
  );
};

export default StudentsList;
