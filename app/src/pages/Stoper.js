import React, { useState, useEffect } from "react";
import { Button, Box, Grid, Input } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#dbf1ee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },

  button: {
    color: "white",
    backgroundColor: "#77a8a8",

    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    fontStyle: "italic",
    textDecoration: "none",
  },

  box: {
    // display: "flex",

    // justifyContent: "evenly",
    // alignItems: "center",
    position: "center",
  },
}));

const Result = styled.div`
  background: white;
  border: 1px solid;
  border-radius: 5px;
  width: 100px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500px;
  font-style: "italic";
  text-decoration: "none";
  text-align: center;
`;
const Stoper = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startValue, setStartValue] = useState();
  const [intervalValue, setIntervaltValue] = useState();
  const classes = useStyles();

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const onStart = (e) => {
    setIsActive(!isActive);
  };

  const onStop = (e) => {
    setIsActive(false);
  };

  const onReset = (e) => {
    setSeconds(0);
    setIsActive(false);
  };

  const onStartValue = (e) => {
    console.log("startValue", startValue);
    setSeconds(startValue);
  };

  const onIntervalValue = (e) => {
    console.log("intervalValue", intervalValue);
    setInterval(intervalValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        {" "}
        <Button className={classes.button} onClick={onStart}>
          start
        </Button>
        <Result>{seconds}</Result>
        <Button className={classes.button} onClick={onStop}>
          stop
        </Button>
      </Box>

      <Button className={classes.button} onClick={onReset}>
        Reset
      </Button>
      <Box>
        {" "}
        <Button className={classes.button} onClick={() => onStartValue()}>
          set start value
        </Button>
        <Input onChange={(e) => setStartValue(e.target.value)}></Input>
      </Box>

      <Box>
        {" "}
        <Button className={classes.button} onClick={() => onIntervalValue()}>
          set interval value
        </Button>
        <Input onChange={(e) => setIntervaltValue(e.target.value)}></Input>
      </Box>
    </div>
  );
};

export default Stoper;
