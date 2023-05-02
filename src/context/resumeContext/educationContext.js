import React, { createContext, useState } from "react";

export const EDUCATIONCONTEXT = createContext([
  {
    inputEducation: {
      studyProgram: "",
      collegeName: "",
      clgStart: "",
      clgEnd: "",
      percentage: "",
    },
    setInput: () => null,
  },
]);

export const EducationContext = ({ children }) => {
  const [inputEducation, setInputEducation] = useState([
    {
      studyProgram: "",
      collegeName: "",
      clgStart: "",
      clgEnd: "",
      percentage: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Education = [...inputEducation];
    Education[index][name] = value;
    setInputEducation(Education);
  };

  const handleAddClick = () => {
    // setInputEducation([...inputEducation, { }]);
    const newInputEducation = [
      ...inputEducation,
      {
        studyProgram: "",
        collegeName: "",
        clgStart: "",
        clgEnd: "",
        percentage: "",
      },
    ];
    setInputEducation(newInputEducation);
  };

  const handleRemoveClick = (index) => {
    const Education = [...inputEducation];
    Education.splice(index, 1);
    setInputEducation(Education);
  };
  return (
    <EDUCATIONCONTEXT.Provider
      value={{
        inputEducation,
        handleInputChange,
        handleAddClick,
        handleRemoveClick,
      }}
    >
      {children}
    </EDUCATIONCONTEXT.Provider>
  );
};
