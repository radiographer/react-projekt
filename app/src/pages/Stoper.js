import React, { useState, useEffect } from "react";
import { Button, Box, Input } from "@material-ui/core";
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
    position: "center",
    marginLeft: 60,
  },
  input: {
    border: "solid 1px",
    borderRadius: 5,
    backgroundColor: "white",
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
  const [intervalValue, setIntervaltValue] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    let interval = null;
    let add = Math.floor(intervalValue);
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + add);
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
    setSeconds(Math.floor(startValue));
  };

  const onIntervalValue = () => {
    console.log("intervalValue", intervalValue);
    setInterval(Math.floor(intervalValue));
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
      </Button>{" "}
      <Box className={classes.box}>
        <Button
          value={0}
          className={classes.button}
          onClick={() => onStartValue()}
        >
          set start value
        </Button>
        <Input
          className={classes.input}
          type="number"
          onChange={(e) => setStartValue(e.target.value)}
        ></Input>{" "}
      </Box>
      <Box className={classes.box}>
        <Button className={classes.button} onClick={() => onIntervalValue()}>
          set interval value
        </Button>
        <Input
          className={classes.input}
          type="number"
          onChange={(e) => setIntervaltValue(e.target.value)}
        ></Input>
      </Box>
    </div>
  );
};

export default Stoper;
