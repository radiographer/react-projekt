import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import logo from "./images/logo.png";
// import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#77a8a8",
    minWidth: 1220,
    // [theme.breakpoints.up("md")]: {
    //   backgroundColor: "green",
    // },
  },

  logo: {
    flexGrow: 1,
    marginLeft: 45,
    maxWidth: 100,
  },
  links: {
    marginLeft: theme.spacing(120),
  },

  toolbar: {
    minHeight: 80,
  },
  // breakpoints: {
  //   values: {
  //     md: 1000,
  //   },
  // },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <img src={logo} alt="React Logo" className={classes.logo} />
          <div className={classes.links}>
            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/">Home</Link>
            </Button>

            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/about">About</Link>
            </Button>
            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/counter">Counter</Link>
            </Button>
            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/stoper">Stoper</Link>
            </Button>

            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/characters">Characters</Link>
            </Button>

            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/register">Register</Link>{" "}
            </Button>

            <Button size="small" style={{ textTransform: "none" }}>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
