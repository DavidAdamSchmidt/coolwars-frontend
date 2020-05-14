import React from "react";
import styled from "styled-components";
import hero_image from "../../../static/images/hero_image.jpg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  max-height: calc(100vh - 380px);
  background: linear-gradient(
      to right bottom,
      rgba(43, 43, 133, 0.8),
      rgba(0, 159, 253, 0.8)
    ),
    url(${hero_image});
  background-size: cover;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: min(7vw, 90px);
  font-family: "Lato", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: min(2.46vw, 32px);
  text-transform: uppercase;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <TextBox>cool wars</TextBox>
    </Container>
  );
};

export default Header;
