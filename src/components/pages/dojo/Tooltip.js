import React from "react";
import styled, { css } from "styled-components";
import { useDojoContext } from "../../../contexts/DojoContext";

const Container = styled.span`
  position: absolute;
  display: none;
  transform: translateX(-100%);
  white-space: nowrap;
  border-radius: 4px;
  padding: 5px;
  background: ${({ theme }) => theme.tabSizeBackground};

  ${({ fullScreen }) =>
    fullScreen
      ? css`
          top: -5px;
          left: -10px;
        `
      : css`
          top: -35px;
          left: 20px;
        `}
`;

const Tooltip = ({ text }) => {
  const { fullScreen } = useDojoContext();

  return <Container fullScreen={fullScreen}>{text}</Container>;
};

export default Tooltip;
