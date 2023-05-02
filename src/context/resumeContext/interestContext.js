import React, { createContext, useState } from "react";

export const INTERESTCONTEXT = createContext([
  {
    inputInterest: { interest: "" },
    setInput: () => null,
  },
]);

export const InterestContext = ({ children }) => {
  const [inputInterest, setInputInterest] = useState([{ interest: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Interest = [...inputInterest];
    Interest[index][name] = value;
    setInputInterest(Interest);
  };

  const handleAddClick = () => {
    setInputInterest([...inputInterest, { interest: "" }]);
  };

  const handleRemoveClick = (index) => {
    const Interest = [...inputInterest];
    Interest.splice(index, 1);
    setInputInterest(Interest);
  };

  return (
    <INTERESTCONTEXT.Provider
      value={{
        inputInterest,
        handleInputChange,
        handleAddClick,
        handleRemoveClick,
      }}
    >
      {children}
    </INTERESTCONTEXT.Provider>
  );
};
