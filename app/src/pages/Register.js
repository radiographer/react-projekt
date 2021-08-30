import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#dbf1ee",
  },
  button: {
    color: "white",
    backgroundColor: "#77a8a8",

    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    fontStyle: "italic",
    textDecoration: "none",
  },
  error: {
    backgroundColor: "#dbf1ee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    fontSize: 20,
    paddingLeft: "20vw",
    paddingRight: "20vw",
  },
}));
export default function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!users) {
    return (
      <div className={classes.error}>
        Connecting to server... please wait or try later. Please, let us know if
        the problem still persists.
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    if (
      users.find((user) => user.email === email) &&
      users.find((user) => user.password === password)
    ) {
      alert(
        "Email address and password are already in use. Please try another."
      );
    }
    axios
      .post("http://localhost:3000/users", { ...user })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
          spacing={5}
        >
          <Grid
            item
            style={{ border: "0.2px solid gray", backgroundColor: "white" }}
          >
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
                className={classes.button}
                onClick={handleSubmit}
                size="small"
                variant="contained"
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
