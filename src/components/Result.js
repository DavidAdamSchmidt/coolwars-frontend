import React from "react";

const Result = ({ resultCode, style }) => {
  return (
    <div>
      <textarea
        style={{ ...style, height: 50, outline: "none" }}
        value={resultCode}
        readOnly
      />
    </div>
  );
};

export default Result;
