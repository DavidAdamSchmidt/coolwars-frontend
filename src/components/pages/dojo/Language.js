import React from "react";
import { useDojoContext } from "../../../contexts/DojoContext";

const Language = () => {
  const { language, setLanguage } = useDojoContext();

  return (
    <select onChange={e => setLanguage(+e.target.value)}>
      <option value={0} selected={!language}>
        Python
      </option>
      <option value={1} selected={language}>
        Java
      </option>
    </select>
  );
};

export default Language;
