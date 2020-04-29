import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Output = styled.textarea`
  display: block;
  margin: auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  height: 50px;
  padding: 6px;
  resize: none;
  outline: none;
  color: ${({ color }) => color};
`;

const Message = styled.div`
  margin: 20px;
  font-size: 18px;
  text-align: center;
  color: ${({ color }) => color};
`;

const Result = ({ result }) => {
  const color = result.valid ? "green" : "red";

  return (
    <Wrapper>
      <Output value={result.code} readOnly color={color} />
      {result && result.valid !== null && (
        <Message color={color}>
          {result.valid ? "Valid solution!" : "Invalid solution :("}
        </Message>
      )}
    </Wrapper>
  );
};

export default Result;
