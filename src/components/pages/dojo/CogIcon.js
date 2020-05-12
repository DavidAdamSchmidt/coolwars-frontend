import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import TabSize from "./TabSize";

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const CogIcon = () => {
  const [showTabSize, setShowTabSize] = useState(false);

  return (
    <Wrapper onClick={() => setShowTabSize(prev => !prev)}>
      <FontAwesomeIcon icon={faCog} size={"lg"} color={"gray"} />
      {showTabSize && <TabSize />}
    </Wrapper>
  );
};

export default CogIcon;
