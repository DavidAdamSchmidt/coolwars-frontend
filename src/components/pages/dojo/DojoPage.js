import React, { useEffect, useState } from "react";
import Axios from "axios";
import CodeBox from "./CodeBox";
import { API_URL } from "../../../constants";
import { Link } from "react-router-dom";

const DojoPage = ({ match }) => {
  const [dojo, setDojo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`${API_URL}/dojo/${match.params.id}`)
      .then(response => {
        if (response.status === 200) {
          setDojo(response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        setLoading(false);
      });
  }, [match.params.id]);

  return (
    <div>
      {loading
        ? "Loading"
        : dojo && (
            <>
              <CodeBox dojo={dojo} />
              <div style={{ textAlign: "center" }}>
                <Link to="/">Back to Home</Link>
              </div>
            </>
          )}
    </div>
  );
};

export default DojoPage;
