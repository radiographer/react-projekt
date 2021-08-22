import React, { useState, useEffect } from "react";

import { Grid, TextField, Button } from "@material-ui/core";

export default function App({ data }) {
  console.log("data", data);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = () => {
    data.push(makeNewUser());
    console.log("data", data);
  };

  const makeNewUser = () => {
    return {
      name: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  };

  const setFNhandler = (e) => {
    console.log(e.target.value);
  };

  const Register = () => {
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <TextField
          variant="outlined"
          label="First Name"
          fullWidth
          style={{ marginBottom: "2em" }}
          value={firstName}
          onChange={setFNhandler}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          fullWidth
          style={{ marginBottom: "2em" }}
          value={lastName}
          onChange={setLastName}
        />
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          style={{ marginBottom: "2em" }}
          value={email}
          onChange={setEmail}
        />
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          style={{ marginBottom: "2em" }}
          value={password}
          onChange={setPassword}
        />
        <Button
          onClick={formHandler}
          size="large"
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </Grid>
    );
  };

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
