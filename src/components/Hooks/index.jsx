import React, { useContext } from "react";
import { StudentContext } from "../../context/Student";

const Hooks = () => {
  const [state, dispatch] = useContext(StudentContext);
  console.log(state);
  return (
    <div>
      <h1>Student </h1>
      {/* {students.map((student) => (
        <h1 key={student.id}>
          {student.id} - {student.name}
          <button onClick={() => onDelete(student.id)}>delete</button>
        </h1>
      ))} */}
    </div>
  );
};
export default Hooks;
