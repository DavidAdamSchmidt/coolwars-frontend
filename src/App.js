import React, { useState } from "react";
import Editor from "./components/Editor";
import Result from "./components/Result";

const App = () => {
  const [resultCode, setResultCode] = useState("");

  const handleCompile = userCode => {
    let result;

    try {
      result = eval(userCode);
    } catch (e) {
      result = `ERROR: ${e.message}`;
    }

    setResultCode(result === undefined ? "undefined" : result);
  };

  return (
    <div>
      <Editor handleCompile={handleCompile} />
      <Result resultCode={resultCode} />
    </div>
  );
};

export default App;
