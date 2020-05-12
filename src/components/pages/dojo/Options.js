import React from "react";
import styled from "styled-components";
import CogIcon from "./CogIcon";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Options = () => {
  return (
    <Container>
      <CogIcon />
    </Container>
  );
};

export default Options;
