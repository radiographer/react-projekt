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
  result: {
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: 5,
    width: 100,
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    fontStyle: "italic",
    textDecoration: "none",
  },
}));

function Counter({ defaultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defaultValue);
  const classes = useStyles();

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
        <div className={classes.result}>{value}</div>
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
