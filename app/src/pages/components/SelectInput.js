import React from "react";

import {
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectInput({ status, handleStatus }) {
  const classes = useStyles();
  const handlerOnChange = (event) => {
    handleStatus(event.target.value);
  };
  return (
    <div>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <FormLabel component="legend">filter by status</FormLabel>

        <Select onChange={handlerOnChange} label="status" value={status}>
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value={"Alive"}>Alive</MenuItem>
          <MenuItem value={"Dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
