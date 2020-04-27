import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px;
`;

const Description = ({ title, description }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <span>{description}</span>
    </Wrapper>
  );
};

export default Description;
