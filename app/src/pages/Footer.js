import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import ExposureIcon from "@material-ui/icons/Exposure";
import TimerIcon from "@material-ui/icons/Timer";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import {
  Paper,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#024f49",
    minWidth: 275,
    paddingBottom: 24,
    paddingTop: 24,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    backgroundColor: "#77a8a8",
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 34,
  },

  ico: {
    color: "white",
    margin: 12,
    marginTop: 44,
  },
  action: {
    justifyContent: "center",
  },
  desc: {
    color: "white",
    margin: 12,
    marginBottom: 44,
    fontFamily: "Montserrat",
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "italic",
    textDecoration: "none",
  },
}));

function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <FaceIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/about">About us</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Do you want to learn more about our outstanding specialist who
              will change your life?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <TimerIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/stoper">Stoper</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Check now how much time is left until your enlightenment.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <ExposureIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/counter">Counter</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Solve a qualifying problem. What type is this number displayed in
              green?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <PeopleIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/characters">Characters</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Choose the character you want to become.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <PersonAddIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/register">Register</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Create an account and enjoy access to our unique resources.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.ico}>
              <PersonIcon style={{ fontSize: 55 }} />
            </Typography>

            <CardActions className={classes.action}>
              <Button size="small">
                <Link to="/login">Login</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              If you already have an account, log in immediately.
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid;
