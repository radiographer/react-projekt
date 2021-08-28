import React, { useState } from "react";

import {
  Switch,
  Grid,
  FormLabel,
  FormControl,
  Typography,
} from "@material-ui/core";

function SwitchAZ({ state, handleState }) {
  const handleChange = (event) => {
    handleState(event.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">alphabetical order</FormLabel>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>a-z</Grid>
          <Grid item>
            <Switch
              checked={state}
              onChange={handleChange}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
          </Grid>
          <Grid item>z-a</Grid>
        </Grid>
      </Typography>
    </FormControl>
  );
}
export default SwitchAZ;
