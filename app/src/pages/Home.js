import React from "react";
import styled from "styled-components";
import main_img from "./images/main.jpg";

function Home() {
  const BackgroundHome = styled.div`
    border: 1px solid #000;
    background-image: url(${main_img});
    width: 2000px;
    height: 2000px;
  `;

  const MainTitle = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 100px;
    color: white;
    position: center;
    text-align: center;
    margin-top: 300px;
  `;

  const MainDescr = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    color: white;
    position: center;
    text-align: center;
  `;

  return (
    <BackgroundHome>
      <MainTitle>WE DESIGN YOUR MIND</MainTitle>
      <MainDescr>
        Mental Fitness allows you to achieve peak performance, achieve peace of
        mind and happiness, and build healthy relationships!
      </MainDescr>
    </BackgroundHome>
  );
}

export default Home;
