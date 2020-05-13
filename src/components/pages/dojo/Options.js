import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faExpand,
  faCompress,
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

const iconColor = "gray";
const iconSize = "lg";

const Options = () => {
  const [showTabSize, setShowTabSize] = useState(false);
  const { fullScreen, setFullScreen, setDojo } = useDojoContext();

  const tabSizeRef = useRef(null);
  const tabSizeIconRef = useRef(null);

  const onMouseDown = useCallback(
    e => {
      if (
        showTabSize &&
        !tabSizeRef.current.contains(e.target) &&
        !tabSizeIconRef.current.contains(e.target)
      ) {
        setShowTabSize(false);
      }
    },
    [showTabSize, tabSizeRef, tabSizeIconRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);

    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [onMouseDown]);

  const resetDojo = () => setDojo(prev => ({ ...prev }));

  return (
    <Container margin={fullScreen ? "10px" : "0 0 20px 0"}>
      <IconWrapper onClick={resetDojo}>
        <FontAwesomeIcon icon={faUndo} size={iconSize} color={iconColor} />
        <Tooltip text="Reset Code" />
      </IconWrapper>
      <IconWrapper
        ref={tabSizeIconRef}
        onClick={() => setShowTabSize(prev => !prev)}
      >
        <FontAwesomeIcon icon={faCog} size={iconSize} color={iconColor} />
        {showTabSize ? (
          <TabSize
            ref={tabSizeRef}
            handleClose={() => setShowTabSize(prev => !prev)}
          />
        ) : (
          <Tooltip text="Tab Spaces" />
        )}
      </IconWrapper>
      <IconWrapper onClick={() => setFullScreen(prev => !prev)}>
        <FontAwesomeIcon
          icon={fullScreen ? faCompress : faExpand}
          size={iconSize}
          color={iconColor}
        />
        <Tooltip text={`${fullScreen ? "Exit" : ""} Full Screen`} />
      </IconWrapper>
    </Container>
  );
};

export default Options;
