import React, { useEffect, useState } from "react";
import Axios from "axios";
import Content from "./Content";
import Header from "./Header";
import Spinner from "../../shared/Spinner";
import { API_URL } from "../../../constants";

const HomePage = () => {
  const [dojos, setDojos] = useState([]);
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

  return loading ? (
    <Spinner marginTop={"100px"} />
  ) : (
    <div>
      <Header />
      <Content dojos={dojos} />
    </div>
  );
};

export default HomePage;
