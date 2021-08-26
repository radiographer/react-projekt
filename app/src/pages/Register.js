import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios.post("http://localhost:3000/users", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
          spacing={5}
        >
          <Grid item style={{ border: "0.2px solid gray" }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <TextField
                variant="outlined"
                label="First Name"
                fullWidth
                style={{ marginBottom: "2em" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="email"
                variant="outlined"
                label="Last Name"
                fullWidth
                style={{ marginBottom: "2em" }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Email"
                fullWidth
                style={{ marginBottom: "2em" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                fullWidth
                style={{ marginBottom: "2em" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
                size="large"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
