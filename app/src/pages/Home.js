import React from "react";
import styled from "styled-components";
import homeImage from "./images/main.jpg";
import ButtonSearch from "./components/ButtonSearch";

const BackgroundHome = styled.div`
  border: 1px solid black;

  background-image: url(${homeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const MainTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 70px;
  color: #0088a9;
  position: center;
  text-align: center;
  margin-top: 130px;
  margin-bottom: 0px;
`;

const MainDescr = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: white;
  position: center;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 100px;
  margin-left: 90px;
  margin-right: 90px;
  border-radius: 10px 30px;
  background-color: rgb(200, 200, 200, 0.5);
`;

function Home() {
  return (
    <BackgroundHome>
      <MainTitle>WE DESIGN YOUR MIND</MainTitle>
      <MainDescr>
        Mental Fitness allows you to achieve peak performance, achieve peace of
        mind and happiness, and build healthy relationships!
      </MainDescr>

      <ButtonSearch />
    </BackgroundHome>
  );
}

export default Home;
