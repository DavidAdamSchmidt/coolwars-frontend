import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";
import Selector from "./Selector";
import { API_URL } from "../../../constants";

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

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
    return <div>Loading...</div>;
  }

  if (selectedDojoId != null) {
    return <Redirect to={`/dojo/${selectedDojoId}`} />;
  }

  return (
    <div>
      <Header />
      <Content>
        <Selector dojos={dojos} handleSelect={id => setSelectedDojoId(id)} />
      </Content>
    </div>
  );
};

export default HomePage;
