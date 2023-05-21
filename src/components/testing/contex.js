import React, { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Jaloliddin", status: "student" },
    { id: 2, name: "Ahmad", status: "Db" },
    { id: 3, name: "Fozil", status: "student" },
    { id: 4, name: "Abror", status: "CR" },
    { id: 5, name: "Jaloliddin", status: "student" },
    { id: 6, name: "Nemat", status: "BC" },
    { id: 7, name: "Hoshim", status: "AI" },
    { id: 8, name: "Fitrat", status: "IT" },
    { id: 9, name: "Jamoliddin", status: "IT" },
    { id: 10, name: "Anora", status: "IT" },
    { id: 11, name: "Abora", status: "IT" },
  ]);
  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentList;
