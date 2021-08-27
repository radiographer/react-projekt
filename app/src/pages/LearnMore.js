import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const ContainerButton = styled.div`
  background-color: #dbf1ee;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  min-height: 15vh;
  padding-top: 12vh;
  padding-left: 2vw;
`;

const SmallContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  min-width: 30vh;
  font-size: 40px;
  padding-left: 20vw;
  padding-right: 20vw;
  border: solid 1px;
`;

function LearnMore({ species, name, status, type, gender }) {
  const history = useHistory();

  return (
    <>
      <ContainerButton>
        <Button
          size="small"
          style={{
            color: "white",
            backgroundColor: "#77a8a8",
            // position: "fixed",
          }}
          onClick={() => history.push("/characters")}
        >
          BACK TO CHARACTERS PAGE
        </Button>
      </ContainerButton>

      <Container>
        <Typography variant="h7">Details:</Typography>
        <SmallContainer>
          <Typography variant="h6">Name: {name}</Typography>
          <Typography variant="h6">Species: {species}</Typography>
          <Typography variant="h6">Status: {status}</Typography>
          <Typography variant="h6">Type: {type}</Typography>
          <Typography variant="h6">Gender: {gender}</Typography>
        </SmallContainer>
      </Container>
    </>
  );
}

export default LearnMore;
