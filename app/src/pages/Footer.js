import React from "react";
import styled from "styled-components";
import "./Footer.css";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import ExposureIcon from "@material-ui/icons/Exposure";
import TimerIcon from "@material-ui/icons/Timer";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";

const MainFooter = styled.div`
  color: white;
  background-color: #77a8a8;
  padding-top: 3em;

  bottom: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Description = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  font-style: italic;
  color: #edf0f1;
  text-decoration: none;
`;

function Footer() {
  return (
    <MainFooter>
      <Container>
        <ul className="NavLinks">
          <li>
            <FaceIcon style={{ fontSize: 55 }} />
            <Link to="/about">About me</Link>
            <Description>Description </Description>
          </li>
          <li>
            <TimerIcon style={{ fontSize: 55 }} />
            <Link to="/stoper">Stoper</Link>
            <Description>Description </Description>
          </li>
          <li>
            <ExposureIcon style={{ fontSize: 55 }} />
            <Link to="/counter">Counter</Link>
            <Description>Description </Description>
          </li>
          <li>
            <PeopleIcon style={{ fontSize: 55 }} />
            <Link to="/characters">Characters</Link>
            <Description>Description </Description>
          </li>
          <li>
            <PersonAddIcon style={{ fontSize: 55 }} />
            <Link to="/register">Register</Link>
            <Description>Description </Description>
          </li>
          <li>
            <PersonIcon style={{ fontSize: 55 }} />
            <Link to="/login">Login</Link>
            <Description>Description </Description>
          </li>
        </ul>
      </Container>
    </MainFooter>
  );
}

export default Footer;
