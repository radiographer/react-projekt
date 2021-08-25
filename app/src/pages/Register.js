import React, { useState } from "react";

import { Grid, TextField, Button } from "@material-ui/core";

export default function App({ data }) {
  console.log("data", data);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

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
            label="First Name"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            type="email"
            variant="outlined"
            label="Last Name"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
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
            onClick={formHandler}
            size="large"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
