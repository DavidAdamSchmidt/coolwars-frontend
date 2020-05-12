import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useDojoContext } from "../../../contexts/DojoContext";
import TabSize from "./TabSize";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin};
`;

const IconWrapper = styled.div`
  &:first-child {
    margin: 0 10px 0 0;
  }

  &:last-child {
    margin: 0 0 0 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Options = () => {
  const [showTabSize, setShowTabSize] = useState(false);
  const { fullScreen, setFullScreen } = useDojoContext();

  return (
    <Container margin={fullScreen ? "10px" : "0 0 20px 0"}>
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
