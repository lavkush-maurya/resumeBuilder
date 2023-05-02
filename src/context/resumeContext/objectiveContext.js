import React, { createContext, useState } from "react";

export const OBJECTIVECONTEXT = createContext({
  inputObjective: { objective: "" },
  setInput: () => null,
});

function ObjectiveContext({ children }) {
  const [inputObjective, setInputObjective] = useState({ objective: "" });
  // handle input change

  return (
    <OBJECTIVECONTEXT.Provider value={{ inputObjective , setInputObjective }}>
      {children}
    </OBJECTIVECONTEXT.Provider>
  );
}

export default ObjectiveContext;
