import React, { useContext } from "react";
import { StudentContext } from "./contex";

const Hooks = () => {
  const [students, setStudents] = useContext(StudentContext);
  const onDelete = (id) => {
    let res = students.filter((student) => student.id !== id);
    setStudents(res);
  };
  return (
    <div>
      <h1>Student {students.length}</h1>
      {students.map((student) => (
        <h1 key={student.id}>
          {student.id} - {student.name}{" "}
          <button onClick={() => onDelete(student.id)}>delete</button>
        </h1>
      ))}
    </div>
  );
};
export default Hooks;
