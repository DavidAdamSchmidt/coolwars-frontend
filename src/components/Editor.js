import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-pastel_on_dark";


const Editor = ({ starterCode, handleCompile, buttonStyle }) => {
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    setUserCode(starterCode);
  }, [starterCode]);

  return (
    <div>
        <AceEditor
            mode="javascript"
            theme="pastel_on_dark"
            onChange={code => setUserCode(code)}
            value={userCode}
            enableSnippets = {true}
            enableBasicAutocompletion = {true}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
        />

      <div style={buttonStyle}>
        <button onClick={() => handleCompile(userCode)}>Compile</button>
      </div>
    </div>
  );
};

export default Editor;
