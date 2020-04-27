import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Editor = ({ starterCode, handleCompile }) => {
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    setUserCode(starterCode);
  }, [starterCode]);

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="tomorrow"
        onChange={code => setUserCode(code)}
        value={userCode}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", fontSize: 16 }}
      />
      <ButtonWrapper>
        <button onClick={() => handleCompile(userCode)}>Compile</button>
      </ButtonWrapper>
    </div>
  );
};

export default Editor;
