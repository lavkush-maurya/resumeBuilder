import React, { createContext, useState } from "react";

export const LANGUAGECONTEXT = createContext([{
  inputLanguage: { language: "" },
  setInput: () => null,
}]);

export const LanguageContext = ({ children }) => {
  const [inputLanguage, setInputLanguage] = useState([{ language: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Language = [...inputLanguage];
    Language[index][name] = value;
    setInputLanguage(Language);
  };

  const handleAddClick = () => {
    setInputLanguage([...inputLanguage, { language: "" }]);
  };

  const handleRemoveClick = (index) => {
    const Language = [...inputLanguage];
    Language.splice(index, 1);
    setInputLanguage(Language);
  };

  return (
    <LANGUAGECONTEXT.Provider value={{ inputLanguage, handleInputChange, handleAddClick, handleRemoveClick }}>
      {children}
    </LANGUAGECONTEXT.Provider>
  );
}
