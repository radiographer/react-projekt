import React from "react";

import {
  Switch,
  Grid,
  FormLabel,
  FormControl,
  Typography,
} from "@material-ui/core";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">alphabetical order</FormLabel>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>a-z</Grid>
          <Grid item>
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
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
