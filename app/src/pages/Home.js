import React from "react";
import styled from "styled-components";
import main_img from "./images/main.jpg";

function Home() {
  const BackgroundHome = styled.div`
    border: 1px solid black;

    background-image: url(${main_img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  const MainTitle = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 70px;
    color: white;
    position: center;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 100px;
  `;

  const MainDescr = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    color: white;
    position: center;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 100px;
  `;

  const ButtonSearch = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: white;
    position: center;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 100px;
  `;

  return (
    <BackgroundHome>
      <MainTitle>WE DESIGN YOUR MIND</MainTitle>
      <MainDescr>
        Mental Fitness allows you to achieve peak performance, achieve peace of
        mind and happiness, and build healthy relationships!
      </MainDescr>
      <ButtonSearch>button and search from Materrial UI</ButtonSearch>
    </BackgroundHome>
  );
}

export default Home;
