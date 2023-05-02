import { useContext } from "react";
import { SKILLCONTEXT } from "../../../context/resumeContext/skillContext";

const SkillDetails = () => {
  const { inputSkill } = useContext(SKILLCONTEXT);

  return (
    <>
      <div>
        {inputSkill.map((input, index) => (
          <div key={index}>
            <span>{input.skill}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default SkillDetails;
