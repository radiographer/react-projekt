import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

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
  return (
    <Container>
      <Typography variant="h7">You have logined successfully!</Typography>
    </Container>
  );
}

export default About;
