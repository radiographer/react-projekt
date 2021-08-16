import React from "react";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import ExposureIcon from "@material-ui/icons/Exposure";
import TimerIcon from "@material-ui/icons/Timer";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

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
                <Link to="/about">About me</Link>
              </Button>
            </CardActions>

            <Typography className={classes.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum{" "}
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
