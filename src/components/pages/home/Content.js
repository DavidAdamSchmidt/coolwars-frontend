import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Selector from "./Selector";
import { QUERIES } from "../../../constants";

const Container = styled.div`
  margin: 40px;

  @media (${QUERIES.MEDIUM}) {
    margin: 60px;
  }
`;

const Message = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  @media (${QUERIES.MEDIUM}) {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Content = ({ dojos }) => {
  const [selectedDojoId, setSelectedDojoId] = useState(null);

  if (selectedDojoId != null) {
    return <Redirect to={`/dojo/${selectedDojoId}`} />;
  }

  return (
    <Container>
      <Message>Ready for a challenge?</Message>
      <Wrapper>
        <Selector dojos={dojos} handleSelect={id => setSelectedDojoId(id)} />
      </Wrapper>
    </Container>
  );
};

export default Content;
