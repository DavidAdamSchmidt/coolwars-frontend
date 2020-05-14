import React, { createContext, useContext, useState } from "react";

const DojoContext = createContext(null);

export const useDojoContext = () => useContext(DojoContext);

const DojoProvider = ({ children }) => {
  const [dojo, setDojo] = useState(null);
  const [language, setLanguage] = useState(0);
  const [tabSize, setTabSize] = useState(4);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <DojoContext.Provider
      value={{
        dojo,
        setDojo,
        language,
        setLanguage,
        tabSize,
        setTabSize,
        fullScreen,
        setFullScreen
      }}
    >
      {children}
    </DojoContext.Provider>
  );
};

export default DojoProvider;
