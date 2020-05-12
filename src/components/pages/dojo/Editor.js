import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import { useDojoContext } from "../../../contexts/DojoContext";
import { useThemeContext } from "../../../contexts/ThemeContext";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const initialStyle = {
  width: "100%",
  fontSize: 16
};

const Editor = ({ starterCode, handleCompile }) => {
  const [userCode, setUserCode] = useState("");
  const [style, setStyle] = useState(initialStyle);
  const { tabSize, fullScreen } = useDojoContext();
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    setUserCode(starterCode);
  }, [starterCode]);

  useEffect(() => {
    setStyle(prev =>
      fullScreen
        ? { ...prev, height: `${window.innerHeight - 300}px` }
        : initialStyle
    );
  }, [fullScreen]);

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme={isDarkMode ? "tomorrow_night_bright" : "tomorrow"}
        onChange={code => setUserCode(code)}
        value={userCode}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        style={style}
        tabSize={tabSize}
      />
      <ButtonWrapper>
        <button onClick={() => handleCompile(userCode)}>Compile</button>
      </ButtonWrapper>
    </div>
  );
};

export default Editor;
