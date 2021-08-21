import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import LearnMore from "../LearnMore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 20,
    margin: 10,
  },
  media: {
    height: 340,
    width: 340,
  },

  link: {
    color: "green",
  },
});

export default function MediaCard({ name, img, species, status, id }) {
  const classes = useStyles();
  let { url, path } = useRouteMatch();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={img}
        title="Character Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {species}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Status:{status}
        </Typography>
      </CardContent>

      <Link className={classes.link} to={`${url}/${name}/${id}/`}>
        LearnMore
      </Link>

      <Route path={`${path}/name/:id`}>
        <LearnMore />
      </Route>
    </Card>
  );
}
