import React, { useState } from "react";

import { Grid, TextField, Button } from "@material-ui/core";

export default function App({ data }) {
 

 

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
        <Grid container direction="column" alignItems="center" justify="center">
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            onClick={}
            size="large"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
