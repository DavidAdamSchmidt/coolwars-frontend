import React, { useEffect, useState } from "react";

const Editor = ({ starterCode, handleCompile, textAreaStyle, buttonStyle }) => {
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    setUserCode(starterCode);
  }, [starterCode]);

  return (
    <div>
      <textarea
        value={userCode}
        style={{ ...textAreaStyle, height: 200 }}
        onChange={e => setUserCode(e.target.value)}
      />
      <div style={buttonStyle}>
        <button onClick={() => handleCompile(userCode)}>Compile</button>
      </div>
    </div>
  );
};

export default Editor;
