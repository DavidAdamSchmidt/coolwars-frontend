import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../../constants";

const Wrapper = styled.div`
  margin-bottom: 40px;
  padding-right: 40px;
  line-height: 1.6;

  @media (${QUERIES.MEDIUM}) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Description = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <span>{description}</span>
    </Wrapper>
  );
};

export default Description;
