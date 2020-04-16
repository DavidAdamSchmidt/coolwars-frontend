import React, { useEffect, useState } from "react";
import Axios from "axios";
import Editor from "./Editor";
import Result from "./Result";
import Selector from "./Selector";
import { API_URL } from "./../constants";

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

const CodeBox = () => {
  const [dojos, setDojos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [starterCode, setStarterCode] = useState("");
  const [resultCode, setResultCode] = useState("");

  useEffect(() => {
    Axios.get(`${API_URL}/dojo`)
      .then(response => {
        if (response.status === 200) {
          setDojos(response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        setLoading(false);
      });
  }, []);

  const handleSelect = id => {
    setStarterCode(dojos.find(dojo => dojo.id === parseInt(id)).starterCode);
  };

  const handleCompile = userCode => {
    let result;

    try {
      // eslint-disable-next-line no-new-func
      result = Function(`"use strict";return (${userCode})`)();
    } catch (e) {
      result = `ERROR: ${e.message}`;
    }

    setResultCode(result === undefined ? "undefined" : result);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Selector dojos={dojos} handleSelect={handleSelect} />
      {starterCode && (
        <Editor
          starterCode={starterCode}
          handleCompile={handleCompile}
          buttonStyle={controllerStyle}
          textAreaStyle={textAreaStyle}
        />
      )}
      {resultCode && <Result resultCode={resultCode} style={textAreaStyle} />}
    </div>
  );
};

export default CodeBox;
