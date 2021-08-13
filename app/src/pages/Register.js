import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";

export default function App() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid item style={{ border: "0.2px solid gray" }}>
        <Register />
      </Grid>
    </Grid>
  );
}

const Register = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <TextField
        variant="outlined"
        label="First Name"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <TextField
        variant="outlined"
        label="Last Name"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <TextField
        variant="outlined"
        label="Email"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <TextField
        variant="outlined"
        label="Password"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <Button size="large" variant="contained" color="primary">
        Register
      </Button>
    </Grid>
  );
};
