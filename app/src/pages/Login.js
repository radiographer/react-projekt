import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";

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
}));
export default function App() {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {
      setUsers(result.data);
    });
  }, []);
  if (!users) {
    return <div>Loading...</div>;
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
      history.push("/succes-login");
    }
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
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
