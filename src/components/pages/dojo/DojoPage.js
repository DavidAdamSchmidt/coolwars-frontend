import React, { useEffect, useState } from "react";
import Axios from "axios";
import CodeBox from "./CodeBox";
import { API_URL } from "../../../constants";

const DojoPage = ({ match }) => {
  const [dojo, setDojo] = useState(null);

  useEffect(() => {
    Axios.get(`${API_URL}/dojo/${match.params.id}`)
      .then(response => {
        if (response.status === 200) {
          setDojo(response.data);
        }
      })
      .catch(error => console.log(`Error: ${error}`));
  }, [match.params.id]);

  if (!dojo) {
    return null;
  }

  return <CodeBox dojo={dojo} />;
};

export default DojoPage;
