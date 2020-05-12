import React from "react";
import styled from "styled-components";
import Description from "./Description";
import WorkingArea from "./WorkingArea";
import { QUERIES } from "../../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 5% 100px 5%;

  @media (${QUERIES.MEDIUM}) {
    display: grid;
    grid-template-columns: 42% auto;
    margin: 80px 5%;
  }
`;

const CodeBox = () => {
  return (
    <Wrapper>
      <Description />
      <WorkingArea />
    </Wrapper>
  );
};

export default CodeBox;
