import React, { createContext, useState } from "react";

export const WORKCONTEXT = createContext([
  {
    inputWork: {
      position: "",
      compName: "",
      compStart: "",
      compEnd: "",
      description: "",
    },
    setInput: () => null,
  },
]);

export const WorkContext = ({ children }) => {
  const [inputWork, setInputWork] = useState([
    { position: "", compName: "", compStart: "", compEnd: "", description: "" },
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Work = [...inputWork];
    Work[index][name] = value;
    setInputWork(Work);
  };

  const handleAddClick = () => {
    // setInputWork([...inputWork, { }]);
    const newInputWork = [
      ...inputWork,
      {
        position: "",
        compName: "",
        compStart: "",
        compEnd: "",
        description: "",
      },
    ];
    setInputWork(newInputWork);
  };

  const handleRemoveClick = (index) => {
    const Work = [...inputWork];
    Work.splice(index, 1);
    setInputWork(Work);
  };
  return (
    <WORKCONTEXT.Provider
      value={{
        inputWork,
        handleInputChange,
        handleAddClick,
        handleRemoveClick,
      }}
    >
      {children}
    </WORKCONTEXT.Provider>
  );
};

export default WorkContext;
