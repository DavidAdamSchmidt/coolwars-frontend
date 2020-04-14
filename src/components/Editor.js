import React, { useState } from "react";

const Editor = ({ handleCompile }) => {
  const [userCode, setUserCode] = useState("");

  return (
    <div>
      <textarea
        style={{ width: 200, height: 200 }}
        onChange={e => setUserCode(e.target.value)}
      />
      <div>
        <button onClick={() => handleCompile(userCode)}>Compile</button>
      </div>
    </div>
  );
};

export default Editor;
