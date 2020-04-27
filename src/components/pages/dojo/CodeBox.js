import React, { useEffect, useState } from "react";
import Axios from "axios";
import Editor from "./Editor";
import Result from "./Result";
import { API_URL } from "../../../constants";

const textAreaStyle = {
  display: "block",
  margin: "auto",
  boxSizing: "border-box",
  width: "100%",
  resize: "none"
};

const controllerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: 20
};

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
    <div style={{ maxWidth: "1000px", display: "flex", margin: "auto" }}>
      <div
        style={{
          margin: 20,
          padding: "0 20px",
          width: 400,
          boxSizing: "border-box"
        }}
      >
        {dojo && (
          <>
            <h1>{dojo.title}</h1>
            <span>{dojo.description}</span>
          </>
        )}
      </div>
      <div style={{ width: 600 }}>
        {dojo && (
          <Editor
            starterCode={dojo.starterCode}
            handleCompile={handleCompile}
            buttonStyle={controllerStyle}
          />
        )}
        {result && <Result result={result} style={textAreaStyle} />}
      </div>
    </div>
  );
};

export default CodeBox;
