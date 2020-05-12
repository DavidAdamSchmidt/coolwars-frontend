import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faExpand,
  faCompressAlt,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import { useDojoContext } from "../../../contexts/DojoContext";
import TabSize from "./TabSize";
import Tooltip from "./Tooltip";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin};
`;

const IconWrapper = styled.div`
  position: relative;
  margin: 0 10px;

  &:first-child {
    margin: 0 10px 0 0;
  }

  &:last-child {
    margin: 0 0 0 10px;
  }

  &:hover {
    cursor: pointer;

    > span {
      display: block;
    }
  }
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
        <Tooltip text="Reset Code" />
      </IconWrapper>
      <IconWrapper onClick={() => setShowTabSize(prev => !prev)}>
        <FontAwesomeIcon icon={faCog} size={"lg"} color={"gray"} />
        {showTabSize ? <TabSize /> : <Tooltip text="Tab Spaces" />}
      </IconWrapper>
      <IconWrapper onClick={() => setFullScreen(prev => !prev)}>
        <FontAwesomeIcon
          icon={fullScreen ? faCompressAlt : faExpand}
          size={"lg"}
          color={"gray"}
        />
        <Tooltip text={`${fullScreen ? "Exit" : ""} Full Screen`} />
      </IconWrapper>
    </Container>
  );
};

export default Options;
