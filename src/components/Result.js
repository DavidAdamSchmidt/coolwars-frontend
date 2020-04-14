import React from "react";

const Result = ({ resultCode }) => {
  return (
    <div>
      <textarea
        style={{ width: 200, height: 100 }}
        value={resultCode}
        readOnly
      />
    </div>
  );
};

export default Result;
