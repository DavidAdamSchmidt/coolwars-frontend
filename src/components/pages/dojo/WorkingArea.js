import React, { useState } from "react";
import Axios from "axios";
import { useDojoContext } from "../../../contexts/DojoContext";
import Editor from "./Editor";
import Options from "./Options";
import Result from "./Result";
import { API_URL } from "../../../constants";

const WorkingArea = () => {
  const [result, setResult] = useState(null);
  const { dojo } = useDojoContext();

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
    <div>
      <Options />
      <Editor handleCompile={handleCompile} />
      {result && <Result result={result} />}
    </div>
  );
};

export default WorkingArea;
