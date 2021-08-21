import React from "react";

import {
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectInput() {
  const classes = useStyles();
  const [species, setSpecies] = React.useState("");

  const handleChange = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <FormLabel component="legend">sort by species</FormLabel>

        <Select value={species} onChange={handleChange} label="species">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Alive</MenuItem>
          <MenuItem value={2}>Dead</MenuItem>
          <MenuItem value={3}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
