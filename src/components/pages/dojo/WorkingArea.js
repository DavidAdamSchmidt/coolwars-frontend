import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { useDojoContext } from "../../../contexts/DojoContext";
import Editor from "./Editor";
import Options from "./Options";
import Output from "./Output";
import { API_URL } from "../../../constants";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  letter-spacing: 0.7px;
`;

const BottomWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
`;

const WorkingArea = () => {
  const [userCode, setUserCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dojo, fullScreen } = useDojoContext();

  useEffect(() => setUserCode(dojo.starterCode), [dojo]);

  const handleCodeChange = newCode => {
    setUserCode(newCode);

    if (result) {
      setResult(null);
    }
  };

  const handleCompile = () => {
    setLoading(true);
    Axios.post(`${API_URL}/verify`, {
      dojoId: dojo.id,
      language: dojo.language,
      code: userCode
    })
      .then(response => {
        if (response.data) {
          setResult(response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        setLoading(false);
      });
  };

  return (
    <div>
      <Options />
      <Editor
        userCode={userCode}
        freeze={loading}
        handleCompile={handleCompile}
        handleChange={handleCodeChange}
      />
      <BottomWrapper marginTop={`${fullScreen ? 34 : 60}px`}>
        {loading || result ? (
          <Output loading={loading} result={result} />
        ) : (
          <ButtonWrapper>
            <Button onClick={() => handleCompile(userCode)}>Compile</Button>
          </ButtonWrapper>
        )}
      </BottomWrapper>
    </div>
  );
};

export default WorkingArea;
