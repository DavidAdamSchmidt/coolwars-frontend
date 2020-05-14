import React, { useEffect } from "react";
import Axios from "axios";
import { useDojoContext } from "../../../contexts/DojoContext";
import CodeBox from "./CodeBox";
import { API_URL } from "../../../constants";

const DojoPage = ({ match }) => {
  const { dojo, setDojo, language } = useDojoContext();

  useEffect(() => {
    Axios.get(`${API_URL}/dojo/${+match.params.id + 10 * language}`)
      .then(response => {
        if (response.status === 200) {
          setDojo(response.data);
        }
      })
      .catch(error => console.log(`Error: ${error}`));
  }, [match.params.id, language, setDojo]);

  return dojo ? <CodeBox /> : null;
};

export default DojoPage;
