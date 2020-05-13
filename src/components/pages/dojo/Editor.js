import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import { useDojoContext } from "../../../contexts/DojoContext";
import { useThemeContext } from "../../../contexts/ThemeContext";

const initialStyle = {
  width: "100%",
  fontSize: 16
};

const Editor = ({ userCode, freeze, handleChange }) => {
  const [style, setStyle] = useState(initialStyle);
  const { tabSize, fullScreen } = useDojoContext();
  const { isDarkMode } = useThemeContext();

  useEffect(
    () =>
      setStyle(prev =>
        fullScreen
          ? { ...prev, height: `${window.innerHeight - 230}px` }
          : initialStyle
      ),
    [fullScreen]
  );

  return (
    <AceEditor
      mode="python"
      theme={isDarkMode ? "tomorrow_night_bright" : "tomorrow"}
      onChange={handleChange}
      value={userCode}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={style}
      tabSize={tabSize}
      readOnly={freeze}
    />
  );
};

export default Editor;
