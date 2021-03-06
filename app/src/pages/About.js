import React from "react";
import styled from "styled-components";
import rickImage from "./images/rick.png";
import { Typography } from "@material-ui/core";
const Image = styled.div`
  background-image: url(${rickImage});
  background-size: cover;

  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
const Container = styled.div`
  background-color: #dbf1ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-size: 40px;
  padding-left: 20vw;
  padding-right: 20vw;
`;

function About(props) {
  const personalInfo = {
    name: "Richard",
    lastName: "Sanchez",
    personality:
      "Rick is a genius scientist, capable of creating complex scientific inventions, including brain-enhancing helmets, dream-invading devices, portals to several different dimensions, various energy weapons and force fields, and the world's first amusement park inside the body of a living human",
  };

  return (
    <Container>
      <Image />
      <Typography variant="h7">
        Hi, this is {personalInfo.name} {personalInfo.lastName}.{" "}
      </Typography>
      <Typography variant="h6">{personalInfo.personality}</Typography>
    </Container>
  );
}

export default About;
