import React, { createContext, useReducer, useContext } from "react";
import { reducer } from "../../components/Navbar/reducer";
import { InitialValue } from "../../components/Navbar/reducer";

export const StudentProvider = createContext();
export const useStudentContext = () => useContext(StudentProvider);

const StudentList = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialValue);
  return (
    <StudentProvider.Provider value={[state, dispatch]}>
      {children}
    </StudentProvider.Provider>
  );
};
export default StudentList;
