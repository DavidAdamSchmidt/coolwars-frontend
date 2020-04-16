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
  const [selectedDojo, setSelectedDojo] = useState("");
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

  useEffect(() => {
    setResultCode("");
  }, [selectedDojo]);

  const handleSelect = id => {
    setSelectedDojo(dojos.find(dojo => dojo.id === parseInt(id)));
  };

  const handleCompile = userCode => {
    let result;

    try {
      // eslint-disable-next-line no-new-func
      result = eval(userCode);
    } catch (e) {
      result = `ERROR: ${e.message}`;
    }

    setResultCode(result === undefined ? "undefined" : result);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        {selectedDojo && (
          <>
            <h1>{selectedDojo.title}</h1>
            <span>{selectedDojo.description}</span>
          </>
        )}
      </div>
      <div style={{ width: 600 }}>
        <Selector
          dojos={dojos}
          handleSelect={handleSelect}
          style={controllerStyle}
        />
        {selectedDojo && (
          <Editor
            starterCode={selectedDojo.starterCode}
            handleCompile={handleCompile}
            buttonStyle={controllerStyle}
            textAreaStyle={textAreaStyle}
          />
        )}
        {resultCode && <Result resultCode={resultCode} style={textAreaStyle} />}
      </div>
    </div>
  );
};

export default CodeBox;
