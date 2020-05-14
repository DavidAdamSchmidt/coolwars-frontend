import React from "react";
import Result from "./Result";
import Spinner from "../../shared/Spinner";

const Output = ({ loading, result }) => {
  if (loading) {
    return <Spinner />;
  }

  return result ? <Result result={result} /> : null;
};

export default Output;
