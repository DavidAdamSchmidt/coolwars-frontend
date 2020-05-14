import React from "react";
import styled from "styled-components";

const Message = styled.textarea`
  display: block;
  margin: auto auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  height: 50px;
  padding: 6px;
  resize: none;
  outline: none;
  color: ${({ color }) => color};
`;

const Result = ({ result }) => {
  const color = result.valid ? "green" : "red";

  return (
    <Message
      value={`${result?.valid ? "Valid" : "Invalid"} solution: ${
        result.output
      }`}
      readOnly
      color={color}
    />
  );
};

export default Result;
