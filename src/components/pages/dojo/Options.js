import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faExpand, faUndo } from "@fortawesome/free-solid-svg-icons";
import { useDojoContext } from "../../../contexts/DojoContext";
import TabSize from "./TabSize";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin};
`;

const IconWrapper = styled.div`
  margin: 0 10px;

  &:first-child {
    position: relative;
    margin: 0 10px 0 0;

    &:not(:hover) > div {
      display: none;
    }
  }

  &:last-child {
    margin: 0 0 0 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  border-radius: 4px;
  width: 88px;
  padding: 5px;
  background: ${({ theme }) => theme.tabSizeBackground};

  ${({ fullScreen }) =>
    fullScreen
      ? css`
          top: -5px;
          left: -105px;
        `
      : css`
          top: -35px;
          left: 10px;
        `}
`;

const Options = () => {
  const [showTabSize, setShowTabSize] = useState(false);
  const { fullScreen, setFullScreen, setDojo } = useDojoContext();

  const resetDojo = () =>
    setDojo(prev => {
      return { ...prev };
    });

  return (
    <Container margin={fullScreen ? "10px" : "0 0 20px 0"}>
      <IconWrapper onClick={resetDojo}>
        <FontAwesomeIcon icon={faUndo} size={"lg"} color={"gray"} />
        <Tooltip fullScreen={fullScreen}>Reset Code</Tooltip>
      </IconWrapper>
      <IconWrapper onClick={() => setShowTabSize(prev => !prev)}>
        <FontAwesomeIcon icon={faCog} size={"lg"} color={"gray"} />
        {showTabSize && <TabSize />}
      </IconWrapper>
      <IconWrapper onClick={() => setFullScreen(prev => !prev)}>
        <FontAwesomeIcon icon={faExpand} size={"lg"} color={"gray"} />
      </IconWrapper>
    </Container>
  );
};

export default Options;
