import React, { createContext, useState } from "react";

export const PROJECTCONTEXT = createContext([
  {
    inputProject: {
      projectName: "",
      projStart: "",
      projEnd: "",
      description: "",
    },
    setInput: () => null,
  },
]);

export const ProjectContext = ({ children }) => {
  const [inputProject, setInputProject] = useState([
    {
      projectName: "",
      projStart: "",
      projEnd: "",
      description: "",
    }
  ]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Project = [...inputProject];
    Project[index][name] = value;
    setInputProject(Project);
  };

  const handleAddClick = () => {
    // setInputProject([...inputProject, { }]);
    const newInputProject = [
    ...inputProject,
    {
      projectName: "",
      projStart: "",
      projEnd: "",
      description: "",
    },
  ];
  setInputProject(newInputProject);
  };

  const handleRemoveClick = (index) => {
    const Project = [...inputProject];
    Project.splice(index, 1);
    setInputProject(Project);
  };
  return (
    <PROJECTCONTEXT.Provider
      value={{
        inputProject,
        handleInputChange,
        handleAddClick,
        handleRemoveClick,
      }}
    >
      {children}
    </PROJECTCONTEXT.Provider>
  );
};

export default ProjectContext;
