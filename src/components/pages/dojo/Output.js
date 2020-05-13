import React from "react";
import Result from "./Result";
import Spinner from "../../shared/Spinner";

const Output = ({ loading, result }) => {
  if (loading) {
    return <Spinner marginTop={"-14px"} />;
  }

  return result ? <Result result={result} /> : null;
};

export default Output;
