import { useContext } from "react";
import { EDUCATIONCONTEXT } from "../../../context/resumeContext/educationContext";

const EducationDetails = () => {
  const { inputEducation } = useContext(EDUCATIONCONTEXT);
  return (
    <>
      <div>
        {inputEducation.map((input, index) => (
          <div key={index}>
            <span>{input.studyProgram}</span>
            <span>{input.collegeName}</span>
            <span>{input.clgStart}</span>
            <span>{input.clgEnd}</span>
            <span>{input.percentage}</span>
          </div>
        ))}
      </div>
    </>
  );
};
