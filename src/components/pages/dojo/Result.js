import React from "react";
import styled from "styled-components";

const Output = styled.textarea`
  display: block;
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  resize: none;
  outline: none;
`;

const Result = ({ result }) => {
  return (
    <div>
      <Output value={result.code} readOnly />
      {result && result.valid !== null && (
        <div style={{ textAlign: "center", margin: 10, fontSize: 18 }}>
          {result.valid ? "Valid" : "Invalid"} solution
        </div>
      )}
    </div>
  );
};

export default Result;
