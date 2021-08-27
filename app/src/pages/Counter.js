import React, { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
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
  color: ${({ number }) =>
    number % 5 === 0 && number !== 0 ? "green" : "black"};
`;

function Counter({ defaultValue = 0, step = 1 }) {
  const classes = useStyles();
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {});

  const onMinus = (e) => {
    setValue(value - step);
  };

  const onPlus = (e) => {
    setValue(value + step);
  };

  const onReset = (e) => {
    setValue(defaultValue);
  };
  return (
    <div className={classes.root}>
      <Box>
        {" "}
        <Button className={classes.button} onClick={onPlus}>
          plus 1
        </Button>
        <Result number={value}>{value}</Result>
        <Button className={classes.button} onClick={onMinus}>
          minus 1
        </Button>
      </Box>

      <Button className={classes.button} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}

export default Counter;
