import React, { createContext, useState } from "react";

export const SOCIALCONTEXT = createContext({
  inputSocial: { github: "", linkedIn: "", email: "", instagram: "" },
  setInput: () => null,
});

function SocialContext({ children }) {
  const [inputSocial, setInputSocial] = useState({
    github: "",
    linkedIn: "",
    email: "",
    instagram: "",
  });
  return (
    <SOCIALCONTEXT.Provider value={{ inputSocial, setInputSocial }}>
      {children}
    </SOCIALCONTEXT.Provider>
  );
}

export default SocialContext;
