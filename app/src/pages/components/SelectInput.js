import React from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    width: 200,
  },
}));

const options = [
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Other" },
];

function SelectInput() {
  const classes = useStyles();
  return (
    <div>
      <Select className={classes.input} options={options} />
    </div>
  );
}

export default SelectInput;
