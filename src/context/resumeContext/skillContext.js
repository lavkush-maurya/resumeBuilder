import React, { createContext, useState } from "react";

export const SKILLCONTEXT = createContext([
  {
    inputSkill: { skill: "" },
    setInput: () => null,
  },
]);

export const SkillContext = ({ children }) => {
  const [inputSkill, setInputSkill] = useState([{ skill: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Skill = [...inputSkill];
    Skill[index][name] = value;
    setInputSkill(Skill);
  };

  const handleAddClick = () => {
    setInputSkill([...inputSkill, { skill: "" }]);
  };

  const handleRemoveClick = (index) => {
    const Skill = [...inputSkill];
    Skill.splice(index, 1);
    setInputSkill(Skill);
  };

  return (
    <SKILLCONTEXT.Provider
      value={{
        inputSkill,
        handleInputChange,
        handleAddClick,
        handleRemoveClick,
      }}
    >
      {children}
    </SKILLCONTEXT.Provider>
  );
};
