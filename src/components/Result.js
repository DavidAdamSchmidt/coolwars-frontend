import React from "react";

const Result = ({ result, style }) => {
  return (
    <div>
      <textarea
        style={{ ...style, height: 50, outline: "none" }}
        value={result.code}
        readOnly
      />
      {result && result.valid !== null && (
        <div style={{ textAlign: "center", margin: 10, fontSize: 18 }}>
          {result.valid ? "Valid" : "Invalid"} solution
        </div>
      )}
    </div>
  );
};

export default Result;
