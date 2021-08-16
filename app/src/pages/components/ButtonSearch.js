import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";

export default function App() {
  return (
    <Grid
      container
      display="flex"
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid item style={{ border: "0.2px solid gray" }}>
        <ButtonSearch />
      </Grid>
    </Grid>
  );
}

const ButtonSearch = () => {
  return (
    <Grid
      container
      display="flex"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Button size="large" variant="contained" color="primary">
        Search
      </Button>
      <TextField
        variant="outlined"
        label="Search"
        fullWidth
        style={{ marginTop: "2em" }}
      />
    </Grid>
  );
};
