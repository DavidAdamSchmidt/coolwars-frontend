import React, { useState } from "react";
import Axios from "axios";
import { useDojoContext } from "../../../contexts/DojoContext";
import Editor from "./Editor";
import Options from "./Options";
import Result from "./Result";
import Spinner from "../../shared/Spinner";
import { API_URL } from "../../../constants";

const WorkingArea = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dojo } = useDojoContext();

  const handleCompile = userCode => {
    setLoading(true);
    Axios.post(`${API_URL}/verify`, {
      dojoId: dojo.id,
      language: "PYTHON",
      code: userCode
    })
      .then(response => {
        if (response.data === true || response.data === false) {
          setResult({ ...result, valid: response.data });
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
      <Editor handleCompile={handleCompile} freeze={loading} />
      {loading && <Spinner />}
      {result && <Result result={result} />}
    </div>
  );
};

export default WorkingArea;
