import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Description from "./Description";
import Editor from "./Editor";
import Result from "./Result";
import { API_URL } from "../../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 5%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 42% auto;
    margin: 80px 5%;
  }
`;

const CodeBox = ({ dojo }) => {
  const [result, setResult] = useState({});

  useEffect(() => {
    setResult("");
  }, [dojo]);

  const verifySolution = solution => {
    Axios.post(`${API_URL}/verify`, {
      dojoId: dojo.id,
      solution: solution
    })
      .then(response => {
        if (response.data === true || response.data === false) {
          setResult({ ...result, valid: response.data });
        }
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };

  const handleCompile = userCode => {
    let result;

    try {
      // eslint-disable-next-line no-eval
      result = `${eval(userCode)}`;
    } catch (e) {
      result = `ERROR: ${e.message}`;
    }

    setResult({ code: result, valid: null });
    verifySolution(result);
  };

  return (
    <Wrapper>
      <Description title={dojo.title} description={dojo.description} />
      <div>
        <Editor starterCode={dojo.starterCode} handleCompile={handleCompile} />
        {result && <Result result={result} />}
      </div>
    </Wrapper>
  );
};

export default CodeBox;
