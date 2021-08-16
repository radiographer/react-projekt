import { createStyles, alpha, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: "center",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.35),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.45),
      },

      minWidth: 200,
    },
    button: {
      color: "white",

      backgroundColor: "#77a8a8",
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.45),
      },
    },
    box: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default function Search() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Button className={classes.button}>Search</Button>
      <InputBase className={classes.search} />
    </Box>
  );
}
