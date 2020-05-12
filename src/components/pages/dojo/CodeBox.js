import React from "react";
import styled, { css } from "styled-components";
import { useDojoContext } from "../../../contexts/DojoContext";
import Description from "./Description";
import WorkingArea from "./WorkingArea";
import { QUERIES } from "../../../constants";

const Wrapper = styled.div`
  ${({ fullScreen }) =>
    !fullScreen &&
    css`
      display: flex;
      flex-direction: column;
      margin: 40px 5% 100px 5%;

      @media (${QUERIES.MEDIUM}) {
        display: grid;
        grid-template-columns: 42% auto;
        margin: 80px 5%;
      }
    `}
`;

const CodeBox = () => {
  const { fullScreen } = useDojoContext();

  return (
    <Wrapper fullScreen={fullScreen}>
      <Description />
      <WorkingArea />
    </Wrapper>
  );
};

export default CodeBox;
