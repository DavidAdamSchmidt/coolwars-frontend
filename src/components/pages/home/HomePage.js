import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import Selector from "./Selector";
import { API_URL } from "../../../constants";

const controllerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: 20
};

const HomePage = () => {
  const [dojos, setDojos] = useState([]);
  const [selectedDojoId, setSelectedDojoId] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>
  }

  if (selectedDojoId != null) {
    return <Redirect to={`/dojo/${selectedDojoId}`} />;
  }

  return (
    <Selector
      dojos={dojos}
      handleSelect={id => setSelectedDojoId(id)}
      style={controllerStyle}
    />
  );
};

export default HomePage;
